import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, onInputChange, selectFilter } = this.props;
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
          />
        </label>
        <label htmlFor="select-filter">
          <select
            name="selectFilter"
            id="select-filter"
            data-testid="rare-filter"
            value={ selectFilter }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  selectFilter: PropTypes.string.isRequired,
};

export default Filter;
