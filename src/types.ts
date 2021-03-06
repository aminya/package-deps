export interface Dependency {
  name: string
  minimumVersion?: string | null
}

export interface DependencyResolved extends Dependency {
  directory: string | null
}
