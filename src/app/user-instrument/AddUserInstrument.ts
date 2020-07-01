import { UseCase } from "../UseCase";
import { UserInstrumentRepository } from "../../domain/user-instrument/UserInstrumentRepository";
import { UserInstrument } from "../../domain/user-instrument/UserInstrument";

export class AddUserInstruments implements UseCase {
  private userInstrumentRepository: UserInstrumentRepository;

  constructor(userInstrumentRepository: UserInstrumentRepository) {
    this.userInstrumentRepository = userInstrumentRepository;
  }

  public async run(context: {
    input: { [key: string]: string };
    params: { [key: string]: string };
  }): Promise<void> {
    await this.userInstrumentRepository.addUserInstrument(
      UserInstrument.create(context.input)
    );
  }
}
