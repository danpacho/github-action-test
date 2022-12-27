# Github `action`을 학습해봅니다.

## 현재 기술 Stack?

1. `pnpm` 패키지 매니저
2. **branch merge**로 패키지를 관리하는 상황

## Workflows?

1. `codeql.yml`

-   `"javascript"` 코드 퀄리티 관리
-   `master` branch에 commit되는 순간 실행

2. `publish.yml`

-   github **release되는 순간** `ci` script 실행
-   `ci` 실행 이후 npm에 배포

3. `release.yml`

-   `master` branch에 commit되는 순간 혹은 pull request merge 되는 순간 실행
-   release 변경 내역, branch의 title과 tag를 기준으로 자동 작성

4. `size-limit.yml`

-   pull request에 의해 `master` branch에 merge되는 순간 실행
-   패키지의 gzip bundle size를 보고 후 제한량 비교 및 사이즈 변경점 체크

## Workflows Helpers

1. [`pnpm/action-setup@v2`](https://github.com/pnpm/action-setup)

-   `pnpm`을 패키지 매니저로 사용

2. [`actions/cache@v3`](https://github.com/actions/cache)

-   `node_modules` 캐싱 전략 사용
-   unique key를 hash한 후 조회
-   이것을 안하면 ci 시간-비용 손해

3. [`JS-DevTools/npm-publish@v1`](https://github.com/JS-DevTools/npm-publish)

-   npm publish를 자동화

-   `NPM_TOKEN`을 이용해 npm 자동화
    ```yml
    uses: JS-DevTools/npm-publish@v1
                 name: Publish package
                 with:
                     token: ${{ secrets.NPM_TOKEN }}
    ```

4. [`release-drafter/release-drafter@v5`](https://github.com/release-drafter/release-drafter)

-   release 내역 업데이트 자동화

5. [`andresz1/size-limit-action@v1`](https://github.com/andresz1/size-limit-action)

-   패키지 bundle size를 체크 및 검토
