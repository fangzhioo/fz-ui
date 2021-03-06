<template>
  <div>
    <ul class="icon-container">
      <li class="icon-item" v-for="name in icons" :key="name" @click="handleCopy(name)">
        <fz-icon :name="name"></fz-icon>
        <p>{{ name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useClipboard } from '@vueuse/core';
import { FzMessage } from 'fz-ui';

const icons = [
  'a-b',
  'align-center',
  'align-justify',
  'align-bottom',
  'align-top',
  'align-left',
  'align-right',
  'bold',
  'delete-column',
  'bring-to-front',
  'code-view',
  'asterisk',
  'align-vertically',
  'attachment-2',
  'bring-forward',
  'english-input',
  'double-quotes-l',
  'delete-row',
  'emphasis-cn',
  'emphasis',
  'font-size-2',
  'font-color',
  'double-quotes-r',
  'flow-chart',
  'h-4',
  'h-1',
  'h-2',
  'h-3',
  'heading',
  'functions',
  'hashtag',
  'h-5',
  'format-clear',
  'font-size',
  'indent-decrease',
  'h-6',
  'indent-increase',
  'insert-column-left',
  'insert-column-right',
  'input-cursor-move',
  'italic',
  'insert-row-bottom',
  'line-height',
  'link',
  'link-unlink',
  'list-ordered',
  'insert-row-top',
  'list-unordered',
  'list-check-2',
  'merge-cells-vertical',
  'list-check',
  'node-tree',
  'number-3',
  'mind-map',
  'number-7',
  'number-9',
  'number-5',
  'number-1',
  'number-8',
  'number-4',
  'number-6',
  'number-2',
  'number-0',
  'organization-chart',
  'single-quotes-r',
  'send-to-back',
  'question-mark',
  'omega',
  'split-cells-vertical',
  'space',
  'sort-asc',
  'single-quotes-l',
  'page-separator',
  'send-backward',
  'separator',
  'sort-desc',
  'superscript-2',
  'split-cells-horizontal',
  'pinyin-input',
  'subscript-2',
  'text-spacing',
  'text',
  'superscript',
  'text-wrap',
  'subscript',
  'translate-2',
  'translate',
  'strikethrough',
  'underline',
  'strikethrough-2',
  'table-2',
  'wubi-input',
  'layers',
  'lock',
  'fullscreen-expand',
  'map',
  'meh',
  'menu',
  'loading',
  'help',
  'minus-circle',
  'modular',
  'notification',
  'mic',
  'more',
  'pad',
  'operation',
  'play',
  'print',
  'mobile-phone',
  'minus',
  'navigation',
  'pdf',
  'prompt',
  'move',
  'refresh',
  'run-up',
  'picture',
  'run-in',
  'pin',
  'save',
  'search',
  'share',
  'scanning',
  'security',
  'sign-out',
  'select',
  'stop',
  'success',
  'smile',
  'switch',
  'setting',
  'survey',
  'task',
  'skip',
  'time',
  'telephone-out',
  'toggle-left',
  'toggle-right',
  'telephone',
  'top',
  'unlock',
  'user',
  'upload',
  'work',
  'training',
  'warning',
  'zoom-in',
  'zoom-out',
  'add-bold',
  'arrow-left-bold',
  'arrow-up-bold',
  'close-bold',
  'arrow-down-bold',
  'minus-bold',
  'arrow-right-bold',
  'select-bold',
  'arrow-up-filling',
  'arrow-down-filling',
  'arrow-left-filling',
  'arrow-right-filling',
  'caps-unlock-filling',
  'comment-filling',
  'check-item-filling',
  'clock-filling',
  'delete-filling',
  'decline-filling',
  'dynamic-filling',
  'intermediate-filling',
  'favorite-filling',
  'layout-filling',
  'help-filling',
  'history-filling',
  'filter-filling',
  'file-common-filling',
  'news-filling',
  'edit-filling',
  'fullscreen-expand-filling',
  'smile-filling',
  'rise-filling',
  'picture-filling',
  'notification-filling',
  'user-filling',
  'setting-filling',
  'switch-filling',
  'work-filling',
  'task-filling',
  'success-filling',
  'warning-filling',
  'folder-filling',
  'map-filling',
  'prompt-filling',
  'meh-filling',
  'cry-filling',
  'top-filling',
  'home-filling',
  'sorting',
  'column-3',
  'column-4',
  'add',
  'add-circle',
  'adjust',
  'arrow-up-circle',
  'arrow-right-circle',
  'arrow-down',
  'ashbin',
  'arrow-right',
  'browse',
  'bottom',
  'back',
  'bad',
  'arrow-double-left',
  'arrow-left-circle',
  'arrow-double-right',
  'caps-lock',
  'camera',
  'chart-bar',
  'attachment',
  'code',
  'close',
  'check-item',
  'calendar',
  'comment',
  'column-vertical',
  'column-horizontal',
  'complete',
  'chart-pie',
  'cry',
  'customer-service',
  'delete',
  'direction-down',
  'copy',
  'cut',
  'data-view',
  'direction-down-circle',
  'direction-right',
  'direction-up',
  'discount',
  'direction-left',
  'download',
  'electronics',
  'drag',
  'elipsis',
  'export',
  'explain',
  'edit',
  'eye-close',
  'email',
  'error',
  'favorite',
  'file-common',
  'file-delete',
  'file-add',
  'film',
  'fabulous',
  'file',
  'folder-close',
  'filter',
  'good',
  'hide',
  'home',
  'history',
  'file-open',
  'forward',
  'import',
  'image-text',
  'keyboard-26',
  'keyboard-9',
  'link',
  'layout',
  'fullscreen-shrink',
];

const { isSupported, copy } = useClipboard();

const handleCopy = (name) => {
  if (isSupported) {
    copy(name)
      .then(() => {
        FzMessage.success('已复制到剪切板');
      })
      .catch((err) => {
        FzMessage.error(err.message || '复制失败');
      });
  } else {
    FzMessage.warning('浏览器不支持复制');
  }
};
</script>

<style lang="less" scoped>
ul,
li {
  list-style: none;
}
.icon-container {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  .icon-item {
    width: 80px;
    font-size: 32px;
    padding: 6px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    margin: 0 10px 10px 0;
    border-radius: 4px;
    &:hover {
      box-shadow: var(--fz-box-shadow-light);
    }

    & > p {
      font-size: 12px;
    }
  }
}
</style>
