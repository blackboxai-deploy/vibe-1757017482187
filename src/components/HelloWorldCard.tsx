'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HelloWorldCard() {
  const [copied, setCopied] = useState(false)
  
  // Get the current URL (will be the preview URL when deployed)
  const previewUrl = typeof window !== 'undefined' ? window.location.href : 'Loading...'
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(previewUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Main Hello World Card */}
      <Card className="w-full max-w-2xl shadow-2xl border-0 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
        <CardHeader className="text-center space-y-4 pb-6">
          <CardTitle className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Hello World!
          </CardTitle>
          <CardDescription className="text-xl text-slate-600 dark:text-slate-300">
            Welcome to your first Next.js application
          </CardDescription>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed">
            🎉 Congratulations! Your hello world app is now live and running. 
            This is a modern Next.js application built with React 19, Tailwind CSS, and shadcn/ui components.
          </p>
          
          <div className="flex flex-col items-center space-y-4 p-6 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              🌐 Live Preview URL
            </h3>
            <div className="w-full max-w-md">
              <div className="flex items-center space-x-2">
                <code className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-600 rounded text-sm font-mono text-slate-700 dark:text-slate-300 truncate">
                  {previewUrl}
                </code>
                <Button 
                  onClick={copyToClipboard}
                  variant={copied ? "default" : "outline"}
                  size="sm"
                  className="shrink-0"
                >
                  {copied ? "✓ Copied!" : "Copy"}
                </Button>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Share this URL to show your hello world app to others
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Card className="text-center p-6 bg-white/60 backdrop-blur-sm dark:bg-slate-800/60 border-0">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Fast</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Built with Next.js for optimal performance and SEO
          </p>
        </Card>

        <Card className="text-center p-6 bg-white/60 backdrop-blur-sm dark:bg-slate-800/60 border-0">
          <div className="text-3xl mb-3">🎨</div>
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Beautiful</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Styled with Tailwind CSS and shadcn/ui components
          </p>
        </Card>

        <Card className="text-center p-6 bg-white/60 backdrop-blur-sm dark:bg-slate-800/60 border-0">
          <div className="text-3xl mb-3">📱</div>
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Responsive</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Works perfectly on desktop, tablet, and mobile devices
          </p>
        </Card>
      </div>
    </div>
  )
}