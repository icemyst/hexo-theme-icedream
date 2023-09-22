---
date: 2023-06-08 23:18:03
comments: false
aside: false
---

<span class="p center logo large" style="font-family: STZhongsong,'Microsoft YaHei';">统计</span>

<span class="p center small" style="font-weight:600;font-family: STZhongsong,'Microsoft YaHei';">冰梦小站·世事无常·小萌新·随缘更新<span>

<p style="text-align:center;font-weight:600;font-size:18px;line-height:.3em">访问统计</p>

<div id="statistic"></div>

<style>
#statistic div span:last-child {
  font-weight: 700;
  font-size: 34px;
  line-height: 1;
  white-space: nowrap;
}

#statistic {
    display: flex;
    font-size: 18px;
    padding: 20px 10px;
    border-radius: 12px;
    width: 100%;
    color: var(--font-color);
    border: 2px solid #03a9f4;
    max-width: 710px;
    margin: 0 auto;
    min-height: 135px;
    justify-content:space-between;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
}

#statistic .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

#statistic a {
    text-decoration: none
}

#statistic .content div {
    display: inline-block
}

#statistic div {
    margin: 0 12px;
    width: 50%;
    flex-direction: column;
}

#statistic div span {
    font-size: 13px;
    line-height: 1.3;
    display: block
}

@media screen and (max-width: 768px) {
    #statistic div span:last-child {
        font-weight: 700;
        font-size: 16px;
        line-height: 2;
    }
}
</style>

<script src="https://npm.elemecdn.com/echarts@4.9.0/dist/echarts.min.js"></script>
<!-- 文章发布时间统计图 -->
<div id="posts-chart" data-start="2022-01" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章标签统计图 -->
<div id="tags-chart" data-length="10" style="border-radius: 8px; height: 300px; padding: 10px;"></div>
<!-- 文章分类统计图 -->
<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px;"></div>

<script>
    async function fetchAndDisplayStatistic() {
        try {
            const data = await fetchData();
            const numbers = extractNumbersFromData(data);
            displayStatistics(numbers);
            addSupportElement();
            animateStatisticValues();
        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchData() {
        const response = await fetch("https://v6-widget.51.la/v6/JxSuAna3ua5vGXEw/quote.js");
        if (!response.ok) throw new Error('获取数据失败。');
        return await response.text();
    }

    function extractNumbersFromData(data) {
        const numRegex = /<\/span><span>(\d+)<\/span><\/p>/g;
        const matches = [...data.matchAll(numRegex)];
        return matches.map(match => parseInt(match[1], 10));
    }

    function displayStatistics(numbers) {
        const title = ["最近活跃", "今日人数", "今日访问", "昨日人数", "昨日访问", "本月访问", "总访问量"];
        const statisticEl = document.querySelector("#statistic");
        if (!statisticEl) throw new Error("未找到统计元素");

        let statisticHtml = '';
        for (let i = 0; i < numbers.length; i++) {
            if (i === 0) {
                // 跳过最近活跃数据
                continue;
            }
            statisticHtml += `<div><span>${title[i]}</span><span class="statistic-value">${numbers[i]}</span></div>`;
        }

        statisticEl.innerHTML = statisticHtml;
    }

    function addSupportElement() {
        const statisticEl = document.querySelector("#statistic");
        const supportEl = document.createElement("span");
        supportEl.style.fontSize = "14px";
        supportEl.innerHTML = "流量统计支持：<a style='color:#1690ff;' target='_blank' rel='noopener' href='https://v6.51.la/'>51la</a>";

        statisticEl.appendChild(supportEl);
        statisticEl.style.position = "relative";
        supportEl.style.position = "absolute";
        supportEl.style.bottom = "10px";
        supportEl.style.left = "10px";
    }

    function animateStatisticValues() {
        const statisticValues = document.querySelectorAll('.statistic-value');

        statisticValues.forEach((value) => {
            const targetValue = parseInt(value.innerText, 10);
            let startTime;

            function easeOutCubic(t) {
                return (--t) * t * t + 1;
            }

            function animate(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;

                // 动画持续时间
                const duration = 2000;
                const percentage = easeOutCubic(progress / duration);

                const currentValue = Math.round(percentage * targetValue);

                value.innerText = currentValue;

                if (currentValue < targetValue) {
                    requestAnimationFrame(animate);
                } else {
                    value.innerText = targetValue; // 确保最后的值与目标值匹配
                }
            }

            requestAnimationFrame(animate);
        });
    }

    (async () => {
        await fetchAndDisplayStatistic();
    })();
</script>