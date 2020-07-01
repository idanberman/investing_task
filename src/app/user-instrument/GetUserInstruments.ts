import { UserInstrument } from "../../domain/user-instrument/UserInstrument";
import { UserInstrumentRepository } from "../../domain/user-instrument/UserInstrumentRepository";
import { UseCase } from "../UseCase";

export class GetUserInstruments implements UseCase {
  private userInstrumentRepository: UserInstrumentRepository;

  constructor(userInstrumentRepository: UserInstrumentRepository) {
    this.userInstrumentRepository = userInstrumentRepository;
  }

  public async run(context: {
    input: { [key: string]: string };
    params: { [key: string]: string };
  }): Promise<UserInstrument[]> {
    return this.userInstrumentRepository.GetUserInstruments();
  }
}
