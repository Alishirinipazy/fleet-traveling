<script setup>
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';


const selectedCity = ref();
const cities = ref([
  { name: 'قم', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>
<template>
  <div class="card rounded-4 border-0 p-3">
    <Tabs value="0">
      <TabList >
        <Tab value="0">{{$t('landing.sec1.ticket.trine.name')}}</Tab>
        <Tab value="1">{{$t('landing.sec1.ticket.air')}}</Tab>
        <Tab value="2">{{$t('landing.sec1.ticket.hotel')}}</Tab>

      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="row ">
          <div class="col-lg-3 py-2">
            <div class="card ">
              <Select v-model="selectedCity" :options="cities" optionLabel="name" :placeholder="$t('landing.sec1.ticket.trine.origin')" class=""   />
            </div>
          </div>
          <div class="col-lg-2 py-2">

            <DatePicker v-model="icondisplay"  :placeholder="$t('landing.sec1.ticket.trine.gone')" showIcon fluid iconDisplay="input" />
          </div>
          <div class="col-lg-2 py-2">

            <DatePicker v-model="icondisplay" :placeholder="$t('landing.sec1.ticket.trine.return')" showIcon fluid iconDisplay="input" />
          </div>
          <div class="col-lg-3 py-2">
            <div class="card ">
              <Select v-model="selectedCity" :options="cities" optionLabel="name" :placeholder="$t('landing.sec1.ticket.trine.dest')" class=""   />
            </div>
          </div>
            <div class="col py-2">
              <globalLinkBTN :text="$t('landing.sec1.search')" link="/product" icon="bi-search" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <p class="text-center">
            بزودی
          </p>
        </TabPanel>
        <TabPanel value="2">
          <p class="text-center">
            بزودی
          </p>
        </TabPanel>

      </TabPanels>
    </Tabs>
  </div>
</template>
<style >
.p-tab-active {
  color: #23262F !important;
}
.p-tablist-active-bar {
  background: #23262F !important;
}
.p-tablist-tab-list {
  border-radius: 50px;
}
</style>