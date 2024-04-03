export class UpdateFlightRequest
{
  aeroName!: string;
  from_city!: string;
  to_city!: string;
  departure!: Date;
  arrival!: Date;
  fare!: number;
  seatingCapacity!: number;
}