export interface IContactsState {
  items: IContact[];
  loading: boolean;
  isFetching: boolean;
  error: string;
}

export interface IContact {
  id: string;
  name: string;
  number: string;
}