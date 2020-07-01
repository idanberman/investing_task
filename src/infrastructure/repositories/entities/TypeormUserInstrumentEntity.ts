import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_instrument")
export class TypeormUserInstrumentEntity {
  @PrimaryGeneratedColumn()
  public instrumentId: number;

  @Column()
  public name: string;

  @Column()
  public symbol: string;

  @Column()
  public instrumentType: string;
}
