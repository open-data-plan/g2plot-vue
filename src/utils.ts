import { isVue2 } from 'vue-demi'

/**
 * compatible merge attrs
 * @param props props
 * @param attrs attrs
 * @returns merged attrs
 */
export const mergeAttrs = (props: any, attrs: Record<string, any>) => {
  const mergedAttrs = isVue2
    ? {
        attrs: {
          ...attrs,
          ...props,
        },
      }
    : {
        ...attrs,
        ...props,
      }

  return mergedAttrs
}
