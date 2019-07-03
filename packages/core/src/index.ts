import AsyncStorage from './AsyncStorage';
import {factoryOptions} from './defaults';
import {IStorageBackend, FactoryOptions, StorageModel} from '../types';

class AsyncStorageFactory {
  constructor() {
    throw new Error(
      "[AsyncStorage] AsyncStorageFactory must not be instantiated.\nInstead, use static functions, like 'create' to get AsyncStorage instance.",
    );
  }

  static create<STR extends IStorageBackend>(
    storage: STR,
    opts: FactoryOptions = factoryOptions,
  ): AsyncStorage<STR, StorageModel<STR>> {
    return new AsyncStorage(storage, opts);
  }
}

export default AsyncStorageFactory;