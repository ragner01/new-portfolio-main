import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a link to download the PDF file from the public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Using your actual PDF file
    link.download = 'Alimi_Omotola_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outline"
      size="sm"
      className="border-glass-border hover:bg-glass-bg transition-all duration-300"
    >
      <Download className="w-4 h-4 mr-2" />
      Resume PDF
    </Button>
  );
};
