export type Ref = any
export type Type = any
export type ElementType = any
export type Key = string | null
export type Props = {
	[key: string]: any
	children?: any
}

export interface ReactElementType {
	$$typeof: symbol | number
	type: Type
	key: Key
	props: Props
	ref: Ref
	__mark: 'jee'
}

export type Action<State> = State | ((prevState: State) => State)
