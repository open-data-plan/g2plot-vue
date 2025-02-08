/**
 * compatible merge attrs
 * @param props props
 * @param attrs attrs
 * @returns merged attrs
 */
export const mergeAttrs = (props: any, attrs: Record<string, any>) => {
  return {
    ...attrs,
    ...props,
  }
}
