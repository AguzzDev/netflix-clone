interface Props {
  Icon: React.ElementType<React.ComponentPropsWithRef<"svg">>
  color: string
}

export const IconsXXS = ({ Icon, color }: Props): JSX.Element => {
  return <Icon className={`w-5 h-5 text-${color}`} />
}

export const IconsXS = ({ Icon, color }: Props): JSX.Element => {
  return <Icon className={`w-6 h-6 text-${color}`} />
}
