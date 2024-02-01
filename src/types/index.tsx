export type TransactionData = {
    id: number; 
    amount: number;
    unit: string;
    from: string;
    to: string;
    currency?: string;
    name?: string;
  };
  
export type Notif<T> = {
    id: string;
    type: string;
    data: T;
  };
  
export type TransactionNotif = Notif<TransactionData>;

export type TransactionCardProps = {
    transaction: TransactionNotif;
}