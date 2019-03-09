import { NoEffect, SideEffectTag } from '../react-type/effect-type'
import { WorkTag } from '../react-type/tag-type'
import { TypeOfMode } from '../react-type/work-type'
import { ExpirationTime, NoWork } from './expiration-time'
import { UpdateQueue } from './update-queue'

class Fiber {
  tag: WorkTag
  key: null | string
  elementType: any = null
  type: any = null
  stateNode: any = null

  return: Fiber = null
  child: Fiber = null
  sibling: Fiber = null
  index: number = 0

  ref: any = null

  pendingProps: any
  memoizedProps: any = null

  updateQueue: UpdateQueue<any> = null

  memoizedState: any = null

  contextDependencies: any = null

  mode: TypeOfMode

  effectTag: SideEffectTag = NoEffect

  nextEffect: Fiber = null
  firstEffect: Fiber = null
  lastEffect: Fiber = null

  expirationTime: ExpirationTime = NoWork
  childExpirationTime: ExpirationTime = NoWork

  alternate: Fiber = null

  constructor(tag: WorkTag, pendingProps: any, key: string | null, mode: TypeOfMode) {
    this.tag = tag
    this.pendingProps = pendingProps
    this.key = key
    this.mode = mode
  }
}

export { Fiber }
