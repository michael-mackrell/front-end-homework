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
  editEmployeeCount({ commit }, idAndCount) {
    commit('editEmployeeCount', idAndCount);
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
  },
  // eslint-disable-next-line no-shadow
  editEmployeeCount(state, idAndCount) {
    const index = state.companies.findIndex((comp) => comp.id === idAndCount.id);
    state.companies[index].numberOfEmployees = idAndCount.numberOfEmployees;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
