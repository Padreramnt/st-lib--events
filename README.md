# Tool library for easy binding events.

> ESNext module, please use [webpack](https://webpack.js.org/) / [rollup](https://rollupjs.org/guide/en/) / [parcel](https://parceljs.org/) / etc.


## Procedure style add event listener.

Returns listener remove function.

```ts
export declare function addEventListener<K extends keyof HTMLElementEventMap>(target: EventTarget, type: K, listener: (event: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof HTMLBodyElementEventMap>(target: EventTarget, type: K, listener: (event: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof HTMLMediaElementEventMap>(target: EventTarget, type: K, listener: (event: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof HTMLMarqueeElementEventMap>(target: EventTarget, type: K, listener: (event: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof HTMLFrameSetElementEventMap>(target: EventTarget, type: K, listener: (event: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof SVGElementEventMap>(target: EventTarget, type: K, listener: (event: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends keyof SVGSVGElementEventMap>(target: EventTarget, type: K, listener: (event: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): () => void;
export declare function addEventListener<K extends string, E = Event>(target: EventTarget, type: K, listener: (event: E) => any, options?: boolean | AddEventListenerOptions): () => void;
```

## Functional style event listener creation.

```ts
export declare function createEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (event: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (event: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (event: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof HTMLMarqueeElementEventMap>(type: K, listener: (event: HTMLMarqueeElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (event: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof SVGElementEventMap>(type: K, listener: (event: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends keyof SVGSVGElementEventMap>(type: K, listener: (event: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
export declare function createEventListener<K extends string, E = Event>(type: K, listener: (event: E) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
```

## Special event listener creation.

1. batch event binding
	```ts
	export declare function createEventMapListener(inp: HTMLEventLisenerMap & SVGEventListenerMap & Record<string, EventListenerMapValue<any>>): (target: EventTarget) => () => void
	```

2. input value changed
	```ts
	export declare function createValueChangeEventListener(listener: (event: Event | InputEvent) => any, options?: boolean | AddEventListenerOptions): (target: EventTarget) => () => void
	```

## Well known event listener creators.

```ts
export declare const createSvgUnloadEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSvgZoomEventListener: (listener: (event: SVGZoomEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAbortEventListener: (listener: (event: UIEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAfterPrintEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAnimationCancelEventListener: (listener: (event: AnimationEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAnimationEndEventListener: (listener: (event: AnimationEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAnimationIterationEventListener: (listener: (event: AnimationEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAnimationStartEventListener: (listener: (event: AnimationEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createAuxClickEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createBeforePrintEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createBeforeUnloadEventListener: (listener: (event: BeforeUnloadEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createBlurEventListener: (listener: (event: FocusEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createBounceEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCancelEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCanPlayEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCanPlayThroughEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createClickEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCloseEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createContextMenuEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCopyEventListener: (listener: (event: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCueChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createCutEventListener: (listener: (event: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDblClickEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragEndEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragEnterEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragExitEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragLeaveEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragoverEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDragStartEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDropEventListener: (listener: (event: DragEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createDurationChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createEmptiedEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createEncryptedEventListener: (listener: (event: MediaEncryptedEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createEndedEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createErrorEventListener: (listener: (event: ErrorEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFinishEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFocusEventListener: (listener: (event: FocusEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFocusInEventListener: (listener: (event: FocusEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFocusOutEventListener: (listener: (event: FocusEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFullscreenChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createFullscreenErrorEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createGotPointerCaptureEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createHashChangeEventListener: (listener: (event: HashChangeEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createInputEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createInvalidEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createKeyDownEventListener: (listener: (event: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createKeyPressEventListener: (listener: (event: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createKeyUpEventListener: (listener: (event: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLanguageChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLoadEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLoadedDataEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLoadedMetadataEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLoadStartEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createLostPointerCaptureEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMessageEventListener: (listener: (event: MessageEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMessageErrorEventListener: (listener: (event: MessageEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseDownEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseEnterEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseLeaveEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseMoveEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseOutEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseOverEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createMouseUpEventListener: (listener: (event: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createOfflineEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createOnlineEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createOrientationChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPageHideEventListener: (listener: (event: PageTransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPageShowEventListener: (listener: (event: PageTransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPasteEventListener: (listener: (event: ClipboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPauseEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPlayEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPlayingEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerCancelEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerDownEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerEnterEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerLeaveEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerMoveEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerOutEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointeroverEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPointerUpEventListener: (listener: (event: PointerEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createPopStateEventListener: (listener: (event: PopStateEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createProgressEventListener: (listener: (event: ProgressEvent<EventTarget>) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createRateChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createRejectionHandledEventListener: (listener: (event: PromiseRejectionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createResetEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createResizeEventListener: (listener: (event: UIEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createScrollEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSecurityPolicyViolationEventListener: (listener: (event: SecurityPolicyViolationEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSeekedEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSeekingEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSelectEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSelectionChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSelectStartEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createStalledEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createStartEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createStorageEventListener: (listener: (event: StorageEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSubmitEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createSuspendEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTimeupdateEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createToggleEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTouchCancelEventListener: (listener: (event: TouchEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTouchEndEventListener: (listener: (event: TouchEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTouchMoveEventListener: (listener: (event: TouchEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTouchStartEventListener: (listener: (event: TouchEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTransitionCancelEventListener: (listener: (event: TransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTransitionEndEventListener: (listener: (event: TransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTransitionRunEventListener: (listener: (event: TransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createTransitionStartEventListener: (listener: (event: TransitionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createUnhandledRejectionEventListener: (listener: (event: PromiseRejectionEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createUnloadEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createVolumeChangeEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createWaitingEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createWaitingForKeyEventListener: (listener: (event: Event) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
export declare const createWheelEventListener: (listener: (event: WheelEvent) => any, options?: boolean | AddEventListenerOptions | undefined) => (target: EventTarget) => () => void
```
