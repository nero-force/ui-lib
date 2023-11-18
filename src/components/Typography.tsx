import React, { useMemo } from 'react'

type TypographyProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

/**
 * Typography component that renders text using HTML heading or paragraph tags.
 * It applies custom font sizes defined in the Tailwind CSS configuration,
 * along with other styling like font family, leading, and text color.
 *
 * This component dynamically selects the appropriate HTML tag based on the
 * 'variant' prop. It combines Tailwind utility classes for font size, font
 * family, text leading, and text color, to achieve consistent and theme-aligned
 * typography across the application.
 *
 * @component
 * @example
 * return (
 *   <Typography variant="h1" className="custom-class">
 *     This is a heading
 *   </Typography>
 * )
 * @example
 * return (
 *   <Typography variant="p" className="custom-class">
 *     This is a paragraph
 *   </Typography>
 * )
 *
 * @param {Object} props - Props for Typography component.
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'} [props.variant='p'] - Specifies the HTML element type to be used.
 * @param {React.ReactNode} props.children - The content to be rendered within the tag.
 * @param {React.HTMLAttributes<HTMLElement>} [props.otherProps] - Additional HTML attributes for the element, such as custom styles or class names.
 */
const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  ...otherProps
}) => {
  const Component = variant

  const typographyClasses = useMemo(() => ({
    h1: 'text-xxxl font-heading leading-none text-text-heading',
    h2: 'text-xxl font-heading leading-tight text-text-heading',
    h3: 'text-lg font-heading leading-snug text-text-heading',
    h4: 'text-md font-heading leading-normal text-text-heading',
    h5: 'text-sm font-heading leading-relaxed text-text-heading',
    h6: 'text-sm font-heading leading-loose text-text-heading',
    p: 'text-sm font-text leading-relaxed text-text'
  }), [])

  // Combine the class for the variant with any additional classes passed via props
  const combinedClassNames = `${typographyClasses[variant]} ${(otherProps.className != null) || ''}`

  return <Component className={combinedClassNames} {...otherProps}>{children}</Component>
}

export default Typography
