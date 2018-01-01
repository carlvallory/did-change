'use babel';

class didChange {
  constructor() {
    this.didChangeView= null;
    this.modalPanel= null;
    this.subscriptions= null;
  }

  activate(state) {
    this.didChangeView = new DidChangeView(state.didChangeViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.didChangeView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'did-change:toggle': () => this.toggle()
    }));
  }

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.didChangeView.destroy();
  }

  serialize() {
    return {
      didChangeViewState: this.didChangeView.serialize()
    };
  }

  toggle() {
    console.log('DidChange was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }
}
