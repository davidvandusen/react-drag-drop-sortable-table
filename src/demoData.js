const numFields = 10;
const numItems = 5;

const fields = [];
for (let fieldId = 1; fieldId <= numFields; fieldId++) {
  fields.push({
    id: fieldId,
    name: `Field ${fieldId}`
  });
}
const items = [];
for (let itemId = 1; itemId <= numItems; itemId++) {
  let item = {
    id: itemId,
    name: `Item ${itemId}`,
    fieldData: []
  };
  for (let fieldId = 1; fieldId <= numFields; fieldId++) {
    item.fieldData.push({
      id: itemId * numFields + fieldId,
      fieldId: fieldId,
      value: Math.floor(Math.random() * 100)
    });
  }
  items.push(item);
}
const data = {
  ui: {
    fieldOrder: fields.map(f => f.id),
    itemOrder: items.map(i => i.id),
    draggedFieldId: null,
    draggedItemId: null,
    highlightItemId: null,
    offsetX: 0,
    offsetY: 0
  },
  fields: fields,
  items: items
};

export default data;
