# 📧 Email Setup Guide for Contact Form

## 🚀 **Option 1: Netlify Forms (Easiest - Recommended)**

✅ **Your form is already set up!** The ContactFormNetlify component is properly configured.

### **Step 1: Enable Email Notifications in Netlify**
1. Go to your Netlify site dashboard
2. Navigate to **Forms** in the left sidebar
3. Find your "contact" form
4. Click **Settings & spam protection**
5. Scroll down to **Form notifications**
6. Click **Add notification**
7. Choose **Email notification**
8. Enter your email: `alimiomotola20@gmail.com`
9. Click **Save**

### **Step 2: Customize Email Template (Optional)**
1. In the same form settings
2. Scroll to **Email notifications**
3. Click on your notification
4. Customize the subject line (e.g., "New Contact Form Submission")
5. Add a custom message if desired
6. Save changes

### **Step 3: Test the Form**
1. Deploy your site to Netlify (if not already)
2. Visit your live site
3. Fill out the contact form
4. Submit it
5. Check your email inbox!

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <p style="display: none;">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>
  
  <div className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full px-3 py-2 border border-glass-border rounded-md focus:border-primary focus:outline-none"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your.email@example.com"
          className="w-full px-3 py-2 border border-glass-border rounded-md focus:border-primary focus:outline-none"
        />
      </div>
    </div>

    <div className="space-y-2">
      <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
      <input
        id="subject"
        name="subject"
        type="text"
        required
        placeholder="What's this about?"
        className="w-full px-3 py-2 border border-glass-border rounded-md focus:border-primary focus:outline-none"
      />
    </div>

    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">Message *</label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project or how I can help..."
        className="w-full px-3 py-2 border border-glass-border rounded-md focus:border-primary focus:outline-none resize-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white py-3 px-6 rounded-md font-medium"
    >
      Send Message
    </button>
  </div>
</form>
```

### **Step 2: How Netlify Forms Work**
- **Automatic**: Netlify detects forms with `data-netlify="true"`
- **No setup needed**: Works immediately when deployed
- **Email notifications**: You'll receive emails at your registered email
- **Spam protection**: Built-in honeypot field prevents spam
- **Form submissions**: Viewable in Netlify dashboard

---

## 🔧 **Option 2: EmailJS (More Control)**

### **Step 1: Create EmailJS Account**
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Create a new service (Gmail, Outlook, etc.)
4. Create an email template

### **Step 2: Get Your Credentials**
- **Service ID**: From your EmailJS dashboard
- **Template ID**: From your email template
- **Public Key**: From your EmailJS account settings

### **Step 3: Update ContactForm.tsx**
Replace the placeholder values:
```typescript
const serviceId = 'service_xxxxxxx'; // Your actual service ID
const templateId = 'template_xxxxxxx'; // Your actual template ID
const publicKey = 'your_public_key_here'; // Your actual public key
```

### **Step 4: EmailJS Template Variables**
Use these variables in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email address

---

## 📱 **Option 3: Formspree (Alternative)**

### **Step 1: Create Formspree Account**
1. Go to [formspree.io](https://formspree.io/)
2. Sign up for free account
3. Create a new form
4. Get your form endpoint URL

### **Step 2: Update Form Action**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Your form fields -->
</form>
```

---

## 🎯 **Recommendation**

**Use Netlify Forms** - it's the easiest option since you're already using Netlify for hosting. Just update the form HTML and it will work automatically!

## 📧 **What Happens When Someone Submits**

1. **Form submission** → Netlify processes it
2. **Email notification** → Sent to your registered email
3. **Form data** → Stored in Netlify dashboard
4. **Success message** → Shown to user
5. **Spam protection** → Automatically filtered

## 🔒 **Security Features**

- **Honeypot field** prevents spam bots
- **Rate limiting** prevents abuse
- **Email validation** ensures valid addresses
- **Form validation** prevents empty submissions
