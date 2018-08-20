const truncate = async (elementId, lines) => {
  const module = await import("@konforti/wasm-truncate");
  module.run(elementId, lines);
};
truncate("long-text", 2);
