import React, { useMemo } from 'react'

type ContainerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

/**
 * Container component that centers content and limits its width.
 * It uses Tailwind CSS classes to apply maximum width at different breakpoints,
 * and also ensures the content is centered with margin auto.
 *
 * This component is useful for creating consistent horizontal spacing and alignment
 * across different pages and sections of the application.
 *
 * @component
 * @example
 * return (
 *   <Container size="md">
 *     <Typography variant="h1">Page Title</Typography>
 *     ...more content...
 *   </Container>
 * )
 *
 * @param {Object} props - Props for Container component.
 * @param {'sm'|'md'|'lg'|'xl'|'2xl'} [props.size='lg'] - Determines the maximum width of the container.
 * @param {React.ReactNode} props.children - The content to be wrapped inside the container.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.otherProps] - Additional HTML attributes for the div element.
 */
const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  children,
  ...otherProps
}) => {
  const containerClasses = useMemo(() => ({
    sm: 'max-w-sm mx-auto',
    md: 'max-w-md mx-auto',
    lg: 'max-w-lg mx-auto',
    xl: 'max-w-xl mx-auto',
    '2xl': 'max-w-2xl mx-auto'
  }), [])

  const combinedClassNames = `${containerClasses[size]} ${(otherProps.className != null) || ''}`

  return <div className={combinedClassNames} {...otherProps}>{children}</div>
}

export default Container
