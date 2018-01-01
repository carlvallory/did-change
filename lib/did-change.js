'use babel';


import DidChangeView from './did-change-view';
import { CompositeDisposable } from 'atom';
import { didChange } from './controller/main.js';

export default new didChange();
