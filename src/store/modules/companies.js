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
  editCompany({ commit }, company) {
    commit('editCompany', company);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  setCompanies(state, companies) {
    state.companies = companies;
  },
  // eslint-disable-next-line no-shadow
  editCompany(state, company) {
    const index = state.companies.findIndex((comp) => comp.id === company.id);
    state.companies[index] = company;
    console.log('test', state.companies);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
