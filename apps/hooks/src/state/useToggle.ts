import { useMemo, useState, useRef } from 'react'

export interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  toggle: (targetValue?: T) => void
}

function useToggle<T = boolean>(): [boolean, Actions<boolean>]
function useToggle<T>(defaultValue: T): [T, Actions<T>]
function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U,
): [T | U, Actions<T | U>]
function useToggle<D = boolean, R = D>(
  defaultValue: D = false as unknown as D, // 默认值是 false
  reverseValue?: R, // 可选的反转值
) {
  const [state, setState] = useState<D | R>(defaultValue)

  // 使用 useRef 存储初始值，不会触发重渲染
  const defaultValueRef = useRef(defaultValue)
  const reverseValueRef = useRef(reverseValue)

  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValueRef.current === undefined
        ? !defaultValueRef.current
        : reverseValueRef.current
    ) as D | R // 计算反转值，如果未提供反转值则取默认值的相反值

    // 切换状态，如果当前状态是默认值，则切换到相反值，反之亦然
    const toggle = (targetValue: D | R) => {
      if (targetValue) {
        setState(targetValue)
      } else {
        setState((s) =>
          s === defaultValueRef.current
            ? reverseValueOrigin
            : defaultValueRef.current,
        )
      }
    }

    const setLeft = () => setState(defaultValueRef.current)
    const setRight = () => setState(reverseValueOrigin)

    return {
      toggle,
      setLeft,
      setRight,
    }
  }, []) // 空依赖，只创建一次

  return [state, actions] as const // 使用 as const 改进返回类型推断
}

export default useToggle
