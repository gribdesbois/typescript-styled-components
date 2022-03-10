interface Props {
  className?: string
  fontSize?: any
  color?: string
}

export const PageText: React.FC<Props> = ({ className, children }) => (
  <span className={className}>{children}</span>
)
