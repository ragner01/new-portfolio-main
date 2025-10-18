import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { elementRef, isVisible } = useScrollAnimation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For now, we'll just log the data and show success
      console.log('Contact form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={elementRef} className={className}>
      <Card className={`bg-gradient-card backdrop-blur-sm border-glass-border shadow-card transition-all duration-1000 ${
        isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
      }`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Send me a message</CardTitle>
          <p className="text-muted-foreground text-center">
            I'd love to hear about your project or discuss opportunities
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                  className="border-glass-border focus:border-primary"
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  {...register('email')}
                  className="border-glass-border focus:border-primary"
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                {...register('subject')}
                className="border-glass-border focus:border-primary"
              />
              {errors.subject && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or how I can help..."
                rows={5}
                {...register('message')}
                className="border-glass-border focus:border-primary resize-none"
              />
              {errors.message && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            {submitStatus === 'success' && (
              <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Message sent successfully!</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Failed to send message. Please try again.</span>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
