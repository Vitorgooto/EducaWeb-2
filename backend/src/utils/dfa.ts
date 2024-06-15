export const validateUsername = (username: string): boolean => {
    const dfa = new DFA();
    return dfa.validate(username);
  };
  
  export const validatePassword = (password: string): boolean => {
    const dfa = new DFA();
    return dfa.validate(password);
  };
  
  class DFA {
    private states: any;
    private currentState: any;
  
    constructor() {
      this.states = {
        START: 'start',
        ACCEPT: 'accept',
        REJECT: 'reject'
      };
      this.currentState = this.states.START;
    }
  
    private transition(input: string) {
      switch (this.currentState) {
        case this.states.START:
          if (input.match(/[a-zA-Z]/)) {
            this.currentState = this.states.ACCEPT;
          } else {
            this.currentState = this.states.REJECT;
          }
          break;
        case this.states.ACCEPT:
          if (!input.match(/[a-zA-Z0-9]/)) {
            this.currentState = this.states.REJECT;
          }
          break;
        default:
          this.currentState = this.states.REJECT;
          break;
      }
    }
  
    public validate(input: string): boolean {
      for (let char of input) {
        this.transition(char);
      }
      return this.currentState === this.states.ACCEPT;
    }
  }
  