import { h } from 'vue';
export function hColgroup(props: any) {
  const isAuto = props.tableLayout === 'auto';
  let columns: any[] = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === undefined)) {
      columns = [];
    }
  }
  const getPropsData = (column: any) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: undefined,
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`,
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };

  return h(
    'colgroup',
    {},
    columns.map((column) => h('col', getPropsData(column))),
  );
}

hColgroup.props = ['columns', 'tableLayout'];
