import { Fiber } from '../react-fiber/fiber'
import ReactNoopUpdateQueue, { ReactUpdateQueue } from './react-noop-update-queue'

class Component {
  props: any
  context: any
  refs: any
  updater: ReactUpdateQueue
  state: any
  isReactComponent: boolean
  _reactInternalFiber: Fiber = null

  constructor(props: any, context: any, updater: ReactUpdateQueue) {
    this.props = props
    this.context = context
    this.refs = {}
    this.updater = updater || ReactNoopUpdateQueue
  }

  setState(partialState: any, callback: any) {
    this.updater.enqueueSetState(this, partialState, callback, 'setState')
  }

  forceUpdate(callback: any) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate')
  }
}

Component.prototype.isReactComponent = true

class PureComponent extends Component {
  isPureReactComponent: boolean

  constructor(props: any, context: any, updater: ReactUpdateQueue) {
    super(props, context, updater)
  }
}

PureComponent.prototype.isPureReactComponent = true

export { Component, PureComponent }
