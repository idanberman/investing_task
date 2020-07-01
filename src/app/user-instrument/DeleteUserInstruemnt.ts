import { UseCase } from "../UseCase";
import { UserInstrumentRepository } from "../../domain/user-instrument/UserInstrumentRepository";

export class DeleteUserInstruments implements UseCase {
  private userInstrumentRepository: UserInstrumentRepository;

  constructor(userInstrumentRepository: UserInstrumentRepository) {
    this.userInstrumentRepository = userInstrumentRepository;
  }

  public async run(context: {
    input: { [key: string]: string };
    params: { [key: string]: string };
  }): Promise<void> {
    const instrumentToDeleteId = Number.parseInt(context.input.id, 10);

    if (Number.isNaN(instrumentToDeleteId)) {
      throw new Error("Invalid id");
    }

    const instrumentToDelete = await this.userInstrumentRepository.getUserInstrumentById(
      instrumentToDeleteId
    );

    if (!instrumentToDelete) {
      throw new Error("NotFound");
    }

    return this.userInstrumentRepository.deleteUserInstrument(
      instrumentToDelete
    );
  }
}
