import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'


const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium text-white tracking-wide transition-colors focus:outline-none focus:ring-2 ring-offset-2 dark:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-blue-400 hover:bg-blue-400/90 dark:bg-blue-500 dark:hover:bg-blue-500/90 ring-blue-400/60',
        destructive: 'bg-red-500/90 hover:bg-red-500/80 ring-red-500/40',
        secondary:
          'text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-200/80 dark:bg-gray-700 dark:hover:bg-gray-700/90 ring-gray-300 dark:ring-gray-700/60',
        ghost:
          'text-gray-500 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-gray-700/90 ring-gray-300 dark:ring-gray-700/60',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
