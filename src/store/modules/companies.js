import * as service from '../../services/CompanyService';

const state = {
  companies: ['test'],
};

const getters = {
  // eslint-disable-next-line no-shadow
  getAllCompanies: (state) => state.companies,
};

const actions = {
  setCompanies({ commit }) {
    service.default.getAll().then((result) => {
      commit('setCompanies', result);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setCompanies(state, companies) {
    state.companies = companies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
