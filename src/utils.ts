import { isVue3 } from 'vue-demi'

/**
 * compatible merge attrs
 * @param props props
 * @param attrs attrs
 * @returns merged attrs
 */
export const mergeAttrs = (props: any, attrs: Record<string, any>) => {
  /* istanbul ignore else */
  if (isVue3) {
    return {
      ...attrs,
      ...props,
    }
  } else {
    return {
      attrs: {
        ...attrs,
        ...props,
      },
    }
  }
}
