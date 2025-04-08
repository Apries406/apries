import { useMemo } from 'react'
import useToggle from './useToggle'

/**
 * 定义 useBoolean Hook 返回的操作对象接口
 */
interface BooleanActions {
  /**
   * 切换布尔值状态
   */
  toggle: (targetValue?: boolean) => void
  /**
   * 将布尔值状态设置为 true
   */
  setTrue: () => void
  /**
   * 将布尔值状态设置为 false
   */
  setFalse: () => void
}

/**
 * @description 用于管理布尔值状态的自定义 Hook
 * @param defaultValue 初始布尔值状态，默认为 false
 * @returns 包含当前布尔值状态和操作对象的元组
 */
export default function useBoolean(
  defaultValue = false,
): [boolean, BooleanActions] {
  const [value, { toggle }] = useToggle(defaultValue)
  const actions = useMemo(() => {
    return {
      toggle,
      setTrue: () => toggle(true),
      setFalse: () => toggle(false),
    }
  }, []) // 空依赖数组确保 actions 只创建一次

  return [value, actions] as const
}
