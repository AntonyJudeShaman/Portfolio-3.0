import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
      className={cn(
        "flex h-40 dmsans mt-5 w-full border-b border-black bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-gray-800 focus-visible:outline-none focus:border-b focus:border-blue-900 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
    
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
