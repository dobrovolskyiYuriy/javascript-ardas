import axios from 'axios';
import Column from './column';

jest.mock('axios');

describe('Column module', () => {
  const column = {
    id: 1,
    title: 'Column testing',
    color: 'rgb(255, 255, 255)'
  };

  describe('getColumns():', () => {
    it('should fetch columns', async () => {
      const columns = [column];
      const resp = {
        data: columns
      };
      axios.get = jest.fn().mockResolvedValue(resp);

      const result = await Column.getColumns();
      expect(axios.get).toHaveBeenCalledWith('/api/column');
      expect(result).toEqual(columns);
    });
  });

  describe('render():', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = document.createElement('div');
      document.body.append(wrapper);
    });

    afterEach(() => {
      wrapper.remove();
      wrapper = null;
    });

    it('should build correct DOM', () => {
      Column.render(column, wrapper);

      const columnContainer = wrapper.querySelector('.column');
      expect(columnContainer).not.toBeNull();
      expect(columnContainer.getAttribute('id')).toEqual(String(column.id));
      expect(columnContainer.style.backgroundColor).toEqual(column.color);

      const columnHeader = columnContainer.querySelector('.column-header');
      expect(columnHeader).not.toBeNull();

      const columnTitle = columnHeader.querySelector('h3');
      expect(columnTitle).not.toBeNull();
      expect(columnTitle.textContent).toEqual(column.title);

      const imgAddCard = columnHeader.querySelector('.add-card');
      expect(imgAddCard).not.toBeNull();
      
      const columnSectionCards = columnContainer.querySelector('.cards');
      expect(columnSectionCards).not.toBeNull();
    });
  });
});