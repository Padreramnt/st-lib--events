function define<K extends keyof HTMLElementEventMap>(
	type: K,
): (listener: (event: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof HTMLBodyElementEventMap>(
	type: K,
): (listener: (event: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof HTMLMediaElementEventMap>(
	type: K,
): (listener: (event: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof HTMLMarqueeElementEventMap>(
	type: K,
): (listener: (event: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof HTMLFrameSetElementEventMap>(
	type: K,
): (listener: (event: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof SVGElementEventMap>(
	type: K,
): (listener: (event: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends keyof SVGSVGElementEventMap>(
	type: K,
): (listener: (event: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions) => (target: EventTarget) => () => void
function define<K extends string>(
	type: K,
) {
	return (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions) => createEventListener(type, listener, options)
}

export function createEventListener<K extends keyof HTMLElementEventMap>(
	type: K,
	listener: (event: HTMLElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof HTMLBodyElementEventMap>(
	type: K,
	listener: (event: HTMLBodyElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof HTMLMediaElementEventMap>(
	type: K,
	listener: (event: HTMLMediaElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof HTMLMarqueeElementEventMap>(
	type: K,
	listener: (event: HTMLMarqueeElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof HTMLFrameSetElementEventMap>(
	type: K,
	listener: (event: HTMLFrameSetElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof SVGElementEventMap>(
	type: K,
	listener: (event: SVGElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends keyof SVGSVGElementEventMap>(
	type: K,
	listener: (event: SVGSVGElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends string, E = Event>(
	type: K,
	listener: (event: E) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void
export function createEventListener<K extends string>(
	type: K,
	listener: (event: Event) => any,
	options?: boolean | AddEventListenerOptions,
): (target: EventTarget) => () => void {
	return target => (target.addEventListener(type, listener, options), () => target.removeEventListener(type, listener, options))
}

export function addEventListener<K extends keyof HTMLElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: HTMLElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof HTMLBodyElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: HTMLBodyElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof HTMLMediaElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: HTMLMediaElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof HTMLMarqueeElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: HTMLMarqueeElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof HTMLFrameSetElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: HTMLFrameSetElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof SVGElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: SVGElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends keyof SVGSVGElementEventMap>(
	target: EventTarget,
	type: K,
	listener: (event: SVGSVGElementEventMap[K]) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends string, E = Event>(
	target: EventTarget,
	type: K,
	listener: (event: E) => any,
	options?: boolean | AddEventListenerOptions,
): () => void
export function addEventListener<K extends string>(
	target: EventTarget,
	type: K,
	listener: (event: Event) => any,
	options?: boolean | AddEventListenerOptions,
): () => void {
	target.addEventListener(type, listener, options)
	return () => target.removeEventListener(type, listener, options)
}

export function createValueChangeEventListener(
	listener: (event: Event | InputEvent) => any,
	options?: boolean | AddEventListenerOptions,
) {
	return (target: EventTarget) => {
		target.addEventListener('change', listener, options)
		target.addEventListener('input', listener, options)
		return () => {
			target.removeEventListener('change', listener, options)
			target.removeEventListener('input', listener, options)
		}
	}
}


export type EventListenerMapValue<T> =
	| ((event: T) => any)
	| [(event: T) => any, (boolean | AddEventListenerOptions)?]

export type EventListenerMap<T> = {
	[K in keyof T]?: EventListenerMapValue<T[K]>
}

export type HTMLBodyElementEventListenerMap = EventListenerMap<HTMLBodyElementEventMap>
export type HTMLElementEventListenerMap = EventListenerMap<HTMLElementEventMap>
export type HTMLFrameSetElementEventListenerMap = EventListenerMap<HTMLFrameSetElementEventMap>
export type HTMLMarqueeElementEventListenerMap = EventListenerMap<HTMLMarqueeElementEventMap>
export type HTMLMediaElementEventListenerMap = EventListenerMap<HTMLMediaElementEventMap>

export type HTMLEventLisenerMap =
	| HTMLBodyElementEventListenerMap
	| HTMLElementEventListenerMap
	| HTMLFrameSetElementEventListenerMap
	| HTMLMarqueeElementEventListenerMap
	| HTMLMediaElementEventListenerMap

export type SVGElementEventListenerMap = EventListenerMap<SVGElementEventMap>
export type SVGSVGElementEventListenerMap = EventListenerMap<SVGSVGElementEventMap>

export type SVGEventListenerMap =
	| SVGElementEventListenerMap
	| SVGSVGElementEventListenerMap

export function createEventMapListener(
	inp: HTMLEventLisenerMap & SVGEventListenerMap & Record<string, EventListenerMapValue<any>>
) {
	const keys = Object.keys(inp)
	const listenerMap: Record<string, (event: Event) => any> = {}
	const optionsMap: Record<string, boolean | AddEventListenerOptions | undefined> = {}
	for (const key of keys) {
		const value = inp[key]
		const [listener, options] = Array.isArray(value) ? value : [value]
		listenerMap[key] = listener
		optionsMap[key] = options
	}
	return (target: EventTarget) => {
		for (const key of keys) {
			target.addEventListener(key, listenerMap[key], optionsMap[key])
		}
		return () => {
			for (const key of keys) {
				target.removeEventListener(key, listenerMap[key], optionsMap[key])
			}
		}
	}
}

export const createSvgUnloadEventListener = define('SVGUnload')
export const createSvgZoomEventListener = define('SVGZoom')
export const createAbortEventListener = define('abort')
export const createAfterPrintEventListener = define('afterprint')
export const createAnimationCancelEventListener = define('animationcancel')
export const createAnimationEndEventListener = define('animationend')
export const createAnimationIterationEventListener = define('animationiteration')
export const createAnimationStartEventListener = define('animationstart')
export const createAuxClickEventListener = define('auxclick')
export const createBeforePrintEventListener = define('beforeprint')
export const createBeforeUnloadEventListener = define('beforeunload')
export const createBlurEventListener = define('blur')
export const createBounceEventListener = define('bounce')
export const createCancelEventListener = define('cancel')
export const createCanPlayEventListener = define('canplay')
export const createCanPlayThroughEventListener = define('canplaythrough')
export const createChangeEventListener = define('change')
export const createClickEventListener = define('click')
export const createCloseEventListener = define('close')
export const createContextMenuEventListener = define('contextmenu')
export const createCopyEventListener = define('copy')
export const createCueChangeEventListener = define('cuechange')
export const createCutEventListener = define('cut')
export const createDblClickEventListener = define('dblclick')
export const createDragEventListener = define('drag')
export const createDragEndEventListener = define('dragend')
export const createDragEnterEventListener = define('dragenter')
export const createDragExitEventListener = define('dragexit')
export const createDragLeaveEventListener = define('dragleave')
export const createDragoverEventListener = define('dragover')
export const createDragStartEventListener = define('dragstart')
export const createDropEventListener = define('drop')
export const createDurationChangeEventListener = define('durationchange')
export const createEmptiedEventListener = define('emptied')
export const createEncryptedEventListener = define('encrypted')
export const createEndedEventListener = define('ended')
export const createErrorEventListener = define('error')
export const createFinishEventListener = define('finish')
export const createFocusEventListener = define('focus')
export const createFocusInEventListener = define('focusin')
export const createFocusOutEventListener = define('focusout')
export const createFullscreenChangeEventListener = define('fullscreenchange')
export const createFullscreenErrorEventListener = define('fullscreenerror')
export const createGotPointerCaptureEventListener = define('gotpointercapture')
export const createHashChangeEventListener = define('hashchange')
export const createInputEventListener = define('input')
export const createInvalidEventListener = define('invalid')
export const createKeyDownEventListener = define('keydown')
export const createKeyPressEventListener = define('keypress')
export const createKeyUpEventListener = define('keyup')
export const createLanguageChangeEventListener = define('languagechange')
export const createLoadEventListener = define('load')
export const createLoadedDataEventListener = define('loadeddata')
export const createLoadedMetadataEventListener = define('loadedmetadata')
export const createLoadStartEventListener = define('loadstart')
export const createLostPointerCaptureEventListener = define('lostpointercapture')
export const createMessageEventListener = define('message')
export const createMessageErrorEventListener = define('messageerror')
export const createMouseDownEventListener = define('mousedown')
export const createMouseEnterEventListener = define('mouseenter')
export const createMouseLeaveEventListener = define('mouseleave')
export const createMouseMoveEventListener = define('mousemove')
export const createMouseOutEventListener = define('mouseout')
export const createMouseOverEventListener = define('mouseover')
export const createMouseUpEventListener = define('mouseup')
export const createOfflineEventListener = define('offline')
export const createOnlineEventListener = define('online')
export const createOrientationChangeEventListener = define('orientationchange')
export const createPageHideEventListener = define('pagehide')
export const createPageShowEventListener = define('pageshow')
export const createPasteEventListener = define('paste')
export const createPauseEventListener = define('pause')
export const createPlayEventListener = define('play')
export const createPlayingEventListener = define('playing')
export const createPointerCancelEventListener = define('pointercancel')
export const createPointerDownEventListener = define('pointerdown')
export const createPointerEnterEventListener = define('pointerenter')
export const createPointerLeaveEventListener = define('pointerleave')
export const createPointerMoveEventListener = define('pointermove')
export const createPointerOutEventListener = define('pointerout')
export const createPointeroverEventListener = define('pointerover')
export const createPointerUpEventListener = define('pointerup')
export const createPopStateEventListener = define('popstate')
export const createProgressEventListener = define('progress')
export const createRateChangeEventListener = define('ratechange')
export const createRejectionHandledEventListener = define('rejectionhandled')
export const createResetEventListener = define('reset')
export const createResizeEventListener = define('resize')
export const createScrollEventListener = define('scroll')
export const createSecurityPolicyViolationEventListener = define('securitypolicyviolation')
export const createSeekedEventListener = define('seeked')
export const createSeekingEventListener = define('seeking')
export const createSelectEventListener = define('select')
export const createSelectionChangeEventListener = define('selectionchange')
export const createSelectStartEventListener = define('selectstart')
export const createStalledEventListener = define('stalled')
export const createStartEventListener = define('start')
export const createStorageEventListener = define('storage')
export const createSubmitEventListener = define('submit')
export const createSuspendEventListener = define('suspend')
export const createTimeupdateEventListener = define('timeupdate')
export const createToggleEventListener = define('toggle')
export const createTouchCancelEventListener = define('touchcancel')
export const createTouchEndEventListener = define('touchend')
export const createTouchMoveEventListener = define('touchmove')
export const createTouchStartEventListener = define('touchstart')
export const createTransitionCancelEventListener = define('transitioncancel')
export const createTransitionEndEventListener = define('transitionend')
export const createTransitionRunEventListener = define('transitionrun')
export const createTransitionStartEventListener = define('transitionstart')
export const createUnhandledRejectionEventListener = define('unhandledrejection')
export const createUnloadEventListener = define('unload')
export const createVolumeChangeEventListener = define('volumechange')
export const createWaitingEventListener = define('waiting')
export const createWaitingForKeyEventListener = define('waitingforkey')
export const createWheelEventListener = define('wheel')
