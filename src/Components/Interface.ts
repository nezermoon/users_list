export interface IUserItem {
  'id'?: number
  'username'?: string
  'name'?: string
  'email'?: string
  'address'?: {
    'street'?: string,
    'city'?: string,
  }
  'user'?: IUserItem 
}