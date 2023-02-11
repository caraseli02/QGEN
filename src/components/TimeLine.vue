<template>
  <el-timeline>
    <el-timeline-item v-for="(activity, index) in generateFakeData()" :key="index" :timestamp="activity.timestamp">
      {{ activity.action }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
const generateFakeData = () => {
  const actions = [
    "Dog found roaming the streets",
    "Joined animal shelter",
    Math.random() < 0.5 ? "Adopted by new owner" : "Taken to veterinary clinic",
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const fakeData = [];
  let currentMonth = Math.floor(Math.random() * 11);
  let currentDay = Math.floor(Math.random() * 29 + 1);
  for (let i = 0; i < actions.length; i++) {
    const date = new Date();
    date.setFullYear(2022, i < 2 ? currentMonth : (i === 2 ? currentMonth + 1 : Math.floor(Math.random() * 11 + (currentMonth + 2))), i < 2 ? currentDay + i : Math.floor(Math.random() * 30 + 1 + i));
    const month = months[date.getMonth()];
    fakeData.push({
      action: actions[i],
      timestamp: `${date.getDate()}th ${month} 2022`,
    });
  }

  return fakeData;
}

</script>
