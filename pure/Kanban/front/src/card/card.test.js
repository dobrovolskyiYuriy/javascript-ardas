import axios from 'axios';
import Card from './card';

jest.mock('axios');

describe('Card module', () => {
  const card = {
    id: 1,
    title: 'Card testing',
    columnId: 1
  };

  describe('getCards():', () => {
    it('should fetch cards', async () => {
      const cards = [card];
      const resp = {
        data: cards
      };
      axios.get = jest.fn().mockResolvedValue(resp);

      const result = await Card.getCards();
      expect(axios.get).toHaveBeenCalledWith('/api/card');
      expect(result).toEqual(cards);
    });
  });

  describe('remove():', () => {
    it('should call axios.delete with correct url', async () => {
      const spy = jest.spyOn(axios, 'delete');

      await Card.remove(card.id);

      expect(spy).toHaveBeenCalledWith(`/api/card/${card.id}`);
    });
  });

  describe('add():', () => {
    it('should call axios.post with correct params', async () => {
      const card = {
        title: 'test',
        columnId: 1
      };

      const responseCard = { ...card, id: 1 };

      axios.post = jest.fn().mockResolvedValue({ data: responseCard });

      const result = await Card.add(card);
      expect(axios.post).toHaveBeenCalledWith('/api/card', card);
      expect(result).toEqual(responseCard);
    })
  });

  describe('update():', () => {
    it('should call axios.patch with correct params', async () => {
      const cardId = 1;
      const data = {
        title: 'new title'
      };

      await Card.update(cardId, data);

      expect(axios.patch).toHaveBeenCalledWith(`/api/card/${cardId}`, data);
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
      Card.render(card, wrapper);

      const cardContainer = wrapper.querySelector('.card');
      expect(cardContainer).not.toBeNull();
      expect(cardContainer.getAttribute('data-card-id')).toEqual(String(card.id));

      const cardTitle = cardContainer.querySelector('p');
      expect(cardTitle).not.toBeNull();
      expect(cardTitle.textContent).toEqual(card.title);

      const imgRemoveCard = cardContainer.querySelector('.remove-card');
      expect(imgRemoveCard).not.toBeNull();
    });
  });
});