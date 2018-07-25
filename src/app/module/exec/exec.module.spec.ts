import { ExecModule } from './exec.module';

describe('ExecModule', () => {
  let testModule: ExecModule;

  beforeEach(() => {
    testModule = new ExecModule();
  });

  it('should create an instance', () => {
    expect(testModule).toBeTruthy();
  });
});
