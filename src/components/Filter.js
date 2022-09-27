import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, onInputChange, selectFilter, checkFilter } = this.props;
    return (
      <div>
        Filtros de busca
        <label htmlFor="filter">
          <input
            type="text"
            name="filter"
            value={ filter }
            onChange={ onInputChange }
            id="filter"
            data-testid="name-filter"
            disabled={ checkFilter }
          />
        </label>
        <label htmlFor="select-filter">
          <select
            name="selectFilter"
            id="select-filter"
            data-testid="rare-filter"
            value={ selectFilter }
            onChange={ onInputChange }
            disabled={ checkFilter }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="check-filter">
          <input
            type="checkbox"
            name="checkFilter"
            id="check-filter"
            checked={ checkFilter }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selectFilter: PropTypes.string.isRequired,
  checkFilter: PropTypes.bool.isRequired,
};

export default Filter;
