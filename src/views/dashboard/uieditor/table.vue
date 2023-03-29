<!--
 * @Author: 闫佳佳 18332162809@163.com
 * @Date: 2022-12-15 16:10:59
 * @LastEditors: 闫佳佳 18332162809@163.com
 * @LastEditTime: 2022-12-15 16:15:22
 * @FilePath: /qiankun/saber-admin/src/components/uieditor/table.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div data-v-2ec52a97="" class="box" style="height: 100%">
    <div
      data-v-2ec52a97=""
      style="height: 100%"
      class="el-table tebleTop el-table--fit el-table--enable-row-hover el-table--enable-row-transition el-table--small"
    >
      <div class="hidden-columns">
        <div data-v-2ec52a97=""></div>
        <div data-v-2ec52a97=""></div>
        <div data-v-2ec52a97=""></div>
        <div data-v-2ec52a97=""></div>
        <div data-v-2ec52a97=""></div>
        <div data-v-2ec52a97=""></div>
      </div>
      <div class="el-table__header-wrapper">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__header"
        >
          <colgroup>
            <col name="el-table_4_column_16" width="50" />
            <col name="el-table_4_column_17" width="144" />
            <col name="el-table_4_column_18" width="70" />
            <col name="el-table_4_column_19" width="70" />
            <col name="el-table_4_column_20" width="143" />
            <col name="el-table_4_column_21" width="120" />
            <col name="gutter" width="0" />
          </colgroup>
          <thead class="has-gutter">
            <tr class="">
              <th
                colspan="1"
                rowspan="1"
                class="el-table_4_column_16 is-center is-leaf"
              >
                <div class="cell">序号</div>
              </th>
              <th colspan="1" rowspan="1" class="el-table_4_column_17 is-leaf">
                <div class="cell">事件名称</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_4_column_18 is-center is-leaf"
              >
                <div class="cell">事件数量</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_4_column_19 is-center is-leaf"
              >
                <div class="cell">威胁等级</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_4_column_20 is-center is-leaf"
              >
                <div class="cell">最近时间</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_4_column_21 is-center is-leaf"
              >
                <div class="cell">处置进度</div>
              </th>
              <th class="gutter" style="width: 0px; display: none"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="el-table__body-wrapper is-scrolling-none">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__body"
          style="width: 597px"
        >
          <colgroup>
            <col name="el-table_4_column_16" width="50" />
            <col name="el-table_4_column_17" width="144" />
            <col name="el-table_4_column_18" width="70" />
            <col name="el-table_4_column_19" width="70" />
            <col name="el-table_4_column_20" width="143" />
            <col name="el-table_4_column_21" width="120" />
          </colgroup>
          <tbody>
            <tr class="el-table__row">
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_16 is-center"
              >
                <div class="cell"><div>1</div></div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_17">
                <div class="cell el-tooltip" style="width: 142px">
                  其它漏洞利用
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_18 is-center"
              >
                <div class="cell el-tooltip">856</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_19 is-center"
              >
                <div class="cell">
                  <span data-v-2ec52a97="" style="color: rgb(235, 88, 85)">
                    高威胁
                  </span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_20 is-center"
              >
                <div class="cell el-tooltip" style="width: 141px">
                  2022-12-14 13:26:01
                </div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_21">
                <div class="cell el-tooltip">
                  <div data-v-2ec52a97="" class="inline-progress">
                    <div
                      data-v-2ec52a97=""
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div class="el-progress-bar__inner" style="width: 0%">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="el-progress__text" style="font-size: 14.4px">
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="el-table__row">
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_16 is-center"
              >
                <div class="cell"><div>2</div></div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_17">
                <div class="cell el-tooltip" style="width: 142px">
                  缓冲区漏洞利用
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_18 is-center"
              >
                <div class="cell el-tooltip">633</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_19 is-center"
              >
                <div class="cell">
                  <span data-v-2ec52a97="" style="color: rgb(235, 88, 85)">
                    高威胁
                  </span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_20 is-center"
              >
                <div class="cell el-tooltip" style="width: 141px">
                  2022-12-14 10:39:01
                </div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_21">
                <div class="cell el-tooltip">
                  <div data-v-2ec52a97="" class="inline-progress">
                    <div
                      data-v-2ec52a97=""
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div class="el-progress-bar__inner" style="width: 0%">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="el-progress__text" style="font-size: 14.4px">
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="el-table__row">
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_16 is-center"
              >
                <div class="cell"><div>3</div></div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_17">
                <div class="cell el-tooltip" style="width: 142px">
                  Web拒绝服务
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_18 is-center"
              >
                <div class="cell el-tooltip">321</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_19 is-center"
              >
                <div class="cell">
                  <span data-v-2ec52a97="" style="color: rgb(235, 88, 85)">
                    高威胁
                  </span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_20 is-center"
              >
                <div class="cell el-tooltip" style="width: 141px">
                  2022-12-12 10:48:04
                </div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_21">
                <div class="cell el-tooltip">
                  <div data-v-2ec52a97="" class="inline-progress">
                    <div
                      data-v-2ec52a97=""
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div class="el-progress-bar__inner" style="width: 0%">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="el-progress__text" style="font-size: 14.4px">
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="el-table__row">
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_16 is-center"
              >
                <div class="cell"><div>4</div></div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_17">
                <div class="cell el-tooltip" style="width: 142px">
                  协议漏洞利用
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_18 is-center"
              >
                <div class="cell el-tooltip">222</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_19 is-center"
              >
                <div class="cell">
                  <span data-v-2ec52a97="" style="color: rgb(235, 88, 85)">
                    高威胁
                  </span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_20 is-center"
              >
                <div class="cell el-tooltip" style="width: 141px">
                  2022-12-12 10:48:03
                </div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_21">
                <div class="cell el-tooltip">
                  <div data-v-2ec52a97="" class="inline-progress">
                    <div
                      data-v-2ec52a97=""
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div class="el-progress-bar__inner" style="width: 0%">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="el-progress__text" style="font-size: 14.4px">
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="el-table__row">
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_16 is-center"
              >
                <div class="cell"><div>5</div></div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_17">
                <div class="cell el-tooltip" style="width: 142px">其它</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_18 is-center"
              >
                <div class="cell el-tooltip">181</div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_19 is-center"
              >
                <div class="cell">
                  <span data-v-2ec52a97="" style="color: rgb(254, 154, 0)">
                    中威胁
                  </span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_4_column_20 is-center"
              >
                <div class="cell el-tooltip" style="width: 141px">
                  2022-12-08 14:19:40
                </div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_4_column_21">
                <div class="cell el-tooltip">
                  <div data-v-2ec52a97="" class="inline-progress">
                    <div
                      data-v-2ec52a97=""
                      role="progressbar"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      class="el-progress el-progress--line"
                    >
                      <div class="el-progress-bar">
                        <div class="el-progress-bar__outer" style="height: 6px">
                          <div class="el-progress-bar__inner" style="width: 0%">
                            <!---->
                          </div>
                        </div>
                      </div>
                      <div class="el-progress__text" style="font-size: 14.4px">
                        0%
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <!---->
          </tbody>
        </table>
        <!----><!---->
      </div>
      <!----><!----><!----><!---->
      <div class="el-table__column-resize-proxy" style="display: none"></div>
    </div>
    <div class="el-loading-mask" style="display: none">
      <div class="el-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg
        ><!---->
      </div>
    </div>
  </div>
</template>
