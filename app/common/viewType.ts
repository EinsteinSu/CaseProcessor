export enum ViewType{
  todo, processing, all
}

export class ViewTypeExtensions {
  getTitle(type: number): string {
    switch (type) {
      case ViewType.all:
        return 'All Cases';
      case ViewType.processing:
        return 'Processing Cases';
      case ViewType.todo:
        return 'To Do Cases';
      default:
        return 'Unkonwn type';
    };
  }
}
