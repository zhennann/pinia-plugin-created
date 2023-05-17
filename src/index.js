export const PiniaPluginCreated = context => {
  if (context.options.created) {
    context.options.created.call(context.store);
  }
}
