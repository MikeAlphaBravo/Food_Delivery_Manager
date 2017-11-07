export class Client {
  constructor(
    public name: string,
    public address: string,
    public zip: number,
    public account: number,
    public statement: number,
    public phone: string,
    public carrier: string,
    public plan: string,
    public email: string,
    public allergies: string,
    public delivery: string,
    public payment: string,
    public opt: boolean
  ) {}
}
