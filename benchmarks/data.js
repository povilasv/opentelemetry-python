window.BENCHMARK_DATA = {
  "lastUpdate": 1612456670575,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962480746,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 36334.07612743757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010227546668162143",
            "extra": "mean: 27.522373115876558 usec\nrounds: 4843"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 27685.17251834125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012614828337951109",
            "extra": "mean: 36.12041786402113 usec\nrounds: 8072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981425846,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25370.982770349485,
            "unit": "iter/sec",
            "range": "stddev: 0.00004028973012782347",
            "extra": "mean: 39.41510697680494 usec\nrounds: 5160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18313.49159042745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002458223820275948",
            "extra": "mean: 54.604551789714684 usec\nrounds: 10417"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985586910,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32940.14775153187,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011872705494909715",
            "extra": "mean: 30.358090909094216 usec\nrounds: 4400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24797.22483636775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017051469513210085",
            "extra": "mean: 40.32709331785364 usec\nrounds: 6869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987159921,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28625.681251583028,
            "unit": "iter/sec",
            "range": "stddev: 0.000004377792646168838",
            "extra": "mean: 34.93366642391084 usec\nrounds: 4119"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21883.909768012156,
            "unit": "iter/sec",
            "range": "stddev: 0.000010113275726673658",
            "extra": "mean: 45.69567369820297 usec\nrounds: 9813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093640759,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32201.966882370925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034930096137207275",
            "extra": "mean: 31.05400373998439 usec\nrounds: 4813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23117.219899782005,
            "unit": "iter/sec",
            "range": "stddev: 0.000005319608692502413",
            "extra": "mean: 43.25779675649623 usec\nrounds: 7646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133363737,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 38241.87357224007,
            "unit": "iter/sec",
            "range": "stddev: 0.000004244872567851742",
            "extra": "mean: 26.149346425482253 usec\nrounds: 5525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 29078.50815474394,
            "unit": "iter/sec",
            "range": "stddev: 0.000004963758184270473",
            "extra": "mean: 34.38965969912929 usec\nrounds: 9042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142144335,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25885.46810301956,
            "unit": "iter/sec",
            "range": "stddev: 0.000026334035645567124",
            "extra": "mean: 38.63171398022156 usec\nrounds: 4678"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19325.29686379388,
            "unit": "iter/sec",
            "range": "stddev: 0.00006486439632894341",
            "extra": "mean: 51.7456475338037 usec\nrounds: 9042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326566513,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30548.466462210687,
            "unit": "iter/sec",
            "range": "stddev: 0.000003824590486258685",
            "extra": "mean: 32.734867435556154 usec\nrounds: 5244"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22943.24823704292,
            "unit": "iter/sec",
            "range": "stddev: 0.000005545181362941976",
            "extra": "mean: 43.58580745273263 usec\nrounds: 7359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328486267,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29896.764125488327,
            "unit": "iter/sec",
            "range": "stddev: 0.000003276870151022486",
            "extra": "mean: 33.448435951215714 usec\nrounds: 4762"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21679.72259857919,
            "unit": "iter/sec",
            "range": "stddev: 0.000003234750698168569",
            "extra": "mean: 46.12605144982513 usec\nrounds: 7794"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482967826,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24925.230395537044,
            "unit": "iter/sec",
            "range": "stddev: 0.000058683693855523303",
            "extra": "mean: 40.11999023202825 usec\nrounds: 3481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19951.500419257936,
            "unit": "iter/sec",
            "range": "stddev: 0.000019093272198610733",
            "extra": "mean: 50.121543692762195 usec\nrounds: 11249"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595892587,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29332.77283792529,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014065357396045314",
            "extra": "mean: 34.091560505560786 usec\nrounds: 4819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21821.853278854716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025910690107174023",
            "extra": "mean: 45.825622013919215 usec\nrounds: 8177"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981108,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23433.075658482616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001990160082266676",
            "extra": "mean: 42.67472245530888 usec\nrounds: 4529"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16876.860926125166,
            "unit": "iter/sec",
            "range": "stddev: 0.000029530323750677647",
            "extra": "mean: 59.25272504035468 usec\nrounds: 9285"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685770032,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22421.603141586358,
            "unit": "iter/sec",
            "range": "stddev: 0.00003556534885747522",
            "extra": "mean: 44.599843895428464 usec\nrounds: 4087"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17113.18838468433,
            "unit": "iter/sec",
            "range": "stddev: 0.000020572044188976255",
            "extra": "mean: 58.43446454986511 usec\nrounds: 8251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780603908,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22777.02021345458,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285207639157562",
            "extra": "mean: 43.90389922072824 usec\nrounds: 3592"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16575.69233660676,
            "unit": "iter/sec",
            "range": "stddev: 0.00002667468498654791",
            "extra": "mean: 60.32930508679506 usec\nrounds: 8473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783644906,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31785.00287556765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013761054609034868",
            "extra": "mean: 31.461378308342873 usec\nrounds: 5403"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22509.620570187333,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020715295445775884",
            "extra": "mean: 44.42544897111421 usec\nrounds: 9671"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793977047,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31630.320881907686,
            "unit": "iter/sec",
            "range": "stddev: 0.000003717850320147815",
            "extra": "mean: 31.615234120877755 usec\nrounds: 4613"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21049.809548622172,
            "unit": "iter/sec",
            "range": "stddev: 0.000004272544976493349",
            "extra": "mean: 47.50636805953694 usec\nrounds: 7132"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890233623,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32146.20472564666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010214751869701427",
            "extra": "mean: 31.107871319011014 usec\nrounds: 4958"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23072.530918576642,
            "unit": "iter/sec",
            "range": "stddev: 0.000001986058884310796",
            "extra": "mean: 43.341582400691856 usec\nrounds: 7148"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995419263,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28493.504576839357,
            "unit": "iter/sec",
            "range": "stddev: 0.000002597792253594687",
            "extra": "mean: 35.09571794874399 usec\nrounds: 3978"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20095.378477916776,
            "unit": "iter/sec",
            "range": "stddev: 0.00000286301872069165",
            "extra": "mean: 49.762685539808096 usec\nrounds: 5899"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996619620,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32297.405226493738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010384252543783779",
            "extra": "mean: 30.962239628454565 usec\nrounds: 4845"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23019.602872205778,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021417706746882703",
            "extra": "mean: 43.44123595665568 usec\nrounds: 7548"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397731842,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29144.49354925789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016292759519135222",
            "extra": "mean: 34.31179884151609 usec\nrounds: 4315"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20564.006461310633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027902222972438323",
            "extra": "mean: 48.628656185331 usec\nrounds: 7728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468374969,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23482.07200926091,
            "unit": "iter/sec",
            "range": "stddev: 0.000022935588075044905",
            "extra": "mean: 42.58567981588753 usec\nrounds: 4563"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15725.876731809003,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501441101474941",
            "extra": "mean: 63.58945940211287 usec\nrounds: 8461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479592596,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32521.977030342645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012913684161043172",
            "extra": "mean: 30.748438173577544 usec\nrounds: 5103"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22946.973708958547,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013923042166331106",
            "extra": "mean: 43.57873123851613 usec\nrounds: 7542"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482747677,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28772.617904067512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016247547639127542",
            "extra": "mean: 34.75526639022418 usec\nrounds: 4820"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20046.41749356272,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026282360966999035",
            "extra": "mean: 49.88422496543927 usec\nrounds: 7210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646107598,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29246.510571297866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017912976197198902",
            "extra": "mean: 34.19211319456984 usec\nrounds: 4373"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20671.07080644726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025238491383565632",
            "extra": "mean: 48.37678750962927 usec\nrounds: 6485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655473984,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22731.122918188874,
            "unit": "iter/sec",
            "range": "stddev: 0.00006375267882736038",
            "extra": "mean: 43.99254729293752 usec\nrounds: 2770"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15730.688779077713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007773127739310769",
            "extra": "mean: 63.57000726694371 usec\nrounds: 8532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734383142,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28827.46625774354,
            "unit": "iter/sec",
            "range": "stddev: 0.000001948517466558046",
            "extra": "mean: 34.689139553892744 usec\nrounds: 5016"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20706.418429811005,
            "unit": "iter/sec",
            "range": "stddev: 0.000002348118298997312",
            "extra": "mean: 48.29420420483251 usec\nrounds: 7801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009389268,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32471.035387047723,
            "unit": "iter/sec",
            "range": "stddev: 0.000001010106965454996",
            "extra": "mean: 30.796677348911615 usec\nrounds: 4556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23142.05334142092,
            "unit": "iter/sec",
            "range": "stddev: 0.000001372090541679659",
            "extra": "mean: 43.21137736771806 usec\nrounds: 7184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016532953,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31130.616326939566,
            "unit": "iter/sec",
            "range": "stddev: 0.000008948760722243202",
            "extra": "mean: 32.122717696874766 usec\nrounds: 4481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19671.514996955735,
            "unit": "iter/sec",
            "range": "stddev: 0.00008396665790416767",
            "extra": "mean: 50.83492553343019 usec\nrounds: 8299"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017767251,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28233.56435783253,
            "unit": "iter/sec",
            "range": "stddev: 0.000002057872025870752",
            "extra": "mean: 35.418836507002375 usec\nrounds: 4673"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20181.77539002481,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021356549403349344",
            "extra": "mean: 49.54965461038018 usec\nrounds: 6940"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029688645,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32644.47332358621,
            "unit": "iter/sec",
            "range": "stddev: 0.000005261347119628736",
            "extra": "mean: 30.633056630675746 usec\nrounds: 4909"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23741.88513780079,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065741915269064655",
            "extra": "mean: 42.1196545344179 usec\nrounds: 8270"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033063558,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24707.67503318591,
            "unit": "iter/sec",
            "range": "stddev: 0.00002523826339033062",
            "extra": "mean: 40.47325370180959 usec\nrounds: 4525"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16913.321465787893,
            "unit": "iter/sec",
            "range": "stddev: 0.00003054685269402461",
            "extra": "mean: 59.12499221532509 usec\nrounds: 10020"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074275828,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31321.705318553475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010430949937526057",
            "extra": "mean: 31.926741849769208 usec\nrounds: 5644"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22391.22662187173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012836348864246172",
            "extra": "mean: 44.66034920227197 usec\nrounds: 7646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099075054,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31867.658922531078,
            "unit": "iter/sec",
            "range": "stddev: 9.953227258958553e-7",
            "extra": "mean: 31.379776042882767 usec\nrounds: 5126"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22696.47676760168,
            "unit": "iter/sec",
            "range": "stddev: 0.000002335212900297768",
            "extra": "mean: 44.05970187529107 usec\nrounds: 8000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163552288,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29195.98457175083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011719353857424768",
            "extra": "mean: 34.25128539653944 usec\nrounds: 4944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20411.721889323984,
            "unit": "iter/sec",
            "range": "stddev: 0.00000181508585800568",
            "extra": "mean: 48.99145723335735 usec\nrounds: 7576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185081019,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26154.95514609183,
            "unit": "iter/sec",
            "range": "stddev: 0.00007559837291131693",
            "extra": "mean: 38.233672908799605 usec\nrounds: 4806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18651.760725719385,
            "unit": "iter/sec",
            "range": "stddev: 0.00009042703957158498",
            "extra": "mean: 53.61424128828089 usec\nrounds: 7576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186867645,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28458.574343117252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014709696610414946",
            "extra": "mean: 35.13879465440796 usec\nrounds: 4602"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20080.422858043636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016619632723360223",
            "extra": "mean: 49.79974809641167 usec\nrounds: 7880"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249207373,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32146.988232861968,
            "unit": "iter/sec",
            "range": "stddev: 9.763418286888637e-7",
            "extra": "mean: 31.10711313782605 usec\nrounds: 4879"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22731.712709267533,
            "unit": "iter/sec",
            "range": "stddev: 0.000001881085806384181",
            "extra": "mean: 43.99140587379974 usec\nrounds: 7559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251421903,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29041.52907732765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032262845263188303",
            "extra": "mean: 34.43344864305672 usec\nrounds: 4975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20722.840057854108,
            "unit": "iter/sec",
            "range": "stddev: 0.000003926481282469809",
            "extra": "mean: 48.25593389748683 usec\nrounds: 7564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252297578,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20882.697959162422,
            "unit": "iter/sec",
            "range": "stddev: 0.000011253319021703074",
            "extra": "mean: 47.88653276293944 usec\nrounds: 4090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14543.262024111233,
            "unit": "iter/sec",
            "range": "stddev: 0.000017205302224319324",
            "extra": "mean: 68.76036465148623 usec\nrounds: 8866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261963134,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23932.93584359366,
            "unit": "iter/sec",
            "range": "stddev: 0.000029968550132962695",
            "extra": "mean: 41.783423752739424 usec\nrounds: 4951"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18012.984966213466,
            "unit": "iter/sec",
            "range": "stddev: 0.000015586662256959642",
            "extra": "mean: 55.51550738956796 usec\nrounds: 8796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617620137,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32474.117837004593,
            "unit": "iter/sec",
            "range": "stddev: 0.000018407020766444965",
            "extra": "mean: 30.793754121951533 usec\nrounds: 4852"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23299.08930167236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013088527799972125",
            "extra": "mean: 42.92013250184083 usec\nrounds: 8098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677476597,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22903.488141629998,
            "unit": "iter/sec",
            "range": "stddev: 0.00004612546311534556",
            "extra": "mean: 43.66147172938139 usec\nrounds: 1185"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16279.705289208627,
            "unit": "iter/sec",
            "range": "stddev: 0.00003366505287215532",
            "extra": "mean: 61.42617340025638 usec\nrounds: 8985"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700884114,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31198.09944058173,
            "unit": "iter/sec",
            "range": "stddev: 0.00001881819548187966",
            "extra": "mean: 32.05323458579738 usec\nrounds: 4817"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22689.36000407323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036474724294466155",
            "extra": "mean: 44.073521678023454 usec\nrounds: 7819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702108359,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32120.489882697682,
            "unit": "iter/sec",
            "range": "stddev: 0.000018368904044456925",
            "extra": "mean: 31.13277548542836 usec\nrounds: 4944"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22999.144689620032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014710130818794513",
            "extra": "mean: 43.47987777351215 usec\nrounds: 7887"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705588312,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23606.128555478772,
            "unit": "iter/sec",
            "range": "stddev: 0.00003771660527466914",
            "extra": "mean: 42.36188062984639 usec\nrounds: 2731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16729.725251559827,
            "unit": "iter/sec",
            "range": "stddev: 0.000017088695491973057",
            "extra": "mean: 59.77384475616318 usec\nrounds: 3633"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765283088,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28173.933935136825,
            "unit": "iter/sec",
            "range": "stddev: 0.000020249431511169253",
            "extra": "mean: 35.49380084095606 usec\nrounds: 4519"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20346.36459275167,
            "unit": "iter/sec",
            "range": "stddev: 0.000003012508481088274",
            "extra": "mean: 49.148829287972504 usec\nrounds: 7375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854679856,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20538.29001385264,
            "unit": "iter/sec",
            "range": "stddev: 0.000050999623622455465",
            "extra": "mean: 48.689545201938486 usec\nrounds: 4303"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15384.573646753614,
            "unit": "iter/sec",
            "range": "stddev: 0.000030533721700151504",
            "extra": "mean: 65.00017634294439 usec\nrounds: 6907"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949827157,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26280.863215325153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000286113973693562",
            "extra": "mean: 38.05050054127866 usec\nrounds: 4619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19591.540708450666,
            "unit": "iter/sec",
            "range": "stddev: 0.000017097140830143214",
            "extra": "mean: 51.042437901203826 usec\nrounds: 8881"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962558764,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32602.365902808906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014347590719681767",
            "extra": "mean: 30.672620600023492 usec\nrounds: 5000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23196.378163651425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032800538505296385",
            "extra": "mean: 43.11017836254254 usec\nrounds: 6840"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048967379,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23480.042809367485,
            "unit": "iter/sec",
            "range": "stddev: 0.000028812773203455683",
            "extra": "mean: 42.589360169353895 usec\nrounds: 4012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15922.510736432385,
            "unit": "iter/sec",
            "range": "stddev: 0.00007335967888879133",
            "extra": "mean: 62.80416553351065 usec\nrounds: 9853"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116176596,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26065.23663893949,
            "unit": "iter/sec",
            "range": "stddev: 0.000021193712985328233",
            "extra": "mean: 38.365276089842816 usec\nrounds: 4542"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18455.41109073552,
            "unit": "iter/sec",
            "range": "stddev: 0.00005471482929666743",
            "extra": "mean: 54.18465051163193 usec\nrounds: 10461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285748859,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23608.451869709064,
            "unit": "iter/sec",
            "range": "stddev: 0.000005911098191763457",
            "extra": "mean: 42.35771178554299 usec\nrounds: 4285"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14930.443597799427,
            "unit": "iter/sec",
            "range": "stddev: 0.00015393831676077375",
            "extra": "mean: 66.97724641934873 usec\nrounds: 8518"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962485190,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29847.623660774047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010700602844449992",
            "extra": "mean: 33.50350471331515 usec\nrounds: 5092"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22741.132116048415,
            "unit": "iter/sec",
            "range": "stddev: 0.000004958493074257459",
            "extra": "mean: 43.97318457572744 usec\nrounds: 6989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981426011,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22014.500078515735,
            "unit": "iter/sec",
            "range": "stddev: 0.000014976830581132465",
            "extra": "mean: 45.424606347337146 usec\nrounds: 4758"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15867.502287121464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004812789257762012",
            "extra": "mean: 63.02189102639234 usec\nrounds: 8369"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985601937,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22744.59734630944,
            "unit": "iter/sec",
            "range": "stddev: 0.00000815260051849711",
            "extra": "mean: 43.96648508540253 usec\nrounds: 4090"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18024.583587464444,
            "unit": "iter/sec",
            "range": "stddev: 0.000001664208545133277",
            "extra": "mean: 55.47978377128613 usec\nrounds: 6507"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987168266,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23103.105466835175,
            "unit": "iter/sec",
            "range": "stddev: 0.000003653566615353875",
            "extra": "mean: 43.284224340988 usec\nrounds: 4667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17783.2234107146,
            "unit": "iter/sec",
            "range": "stddev: 0.000003852913865682657",
            "extra": "mean: 56.232774953357904 usec\nrounds: 6452"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093632644,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26648.095852255607,
            "unit": "iter/sec",
            "range": "stddev: 9.38203107418195e-7",
            "extra": "mean: 37.52613340721513 usec\nrounds: 4505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20550.255503068794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012602170712229903",
            "extra": "mean: 48.66119547032731 usec\nrounds: 6579"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133372446,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26615.042522672135,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010535235529369258",
            "extra": "mean: 37.5727372649563 usec\nrounds: 4731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20606.271971221548,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013095989863154472",
            "extra": "mean: 48.52891398291681 usec\nrounds: 7359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142102002,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21426.856006402402,
            "unit": "iter/sec",
            "range": "stddev: 0.000055451806797821214",
            "extra": "mean: 46.67040277403262 usec\nrounds: 3893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15561.242850561917,
            "unit": "iter/sec",
            "range": "stddev: 0.00002829142333480023",
            "extra": "mean: 64.2622192586558 usec\nrounds: 9824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326576599,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24425.420462580107,
            "unit": "iter/sec",
            "range": "stddev: 0.000010225797475086163",
            "extra": "mean: 40.9409533617653 usec\nrounds: 4417"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18585.832528233695,
            "unit": "iter/sec",
            "range": "stddev: 0.000012860805895777934",
            "extra": "mean: 53.80442326061544 usec\nrounds: 7962"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328483307,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22940.17912940376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012232631370621267",
            "extra": "mean: 43.591638685952624 usec\nrounds: 4384"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17590.75196776975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015575205134761465",
            "extra": "mean: 56.848052990129524 usec\nrounds: 6605"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482981632,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23733.309668336115,
            "unit": "iter/sec",
            "range": "stddev: 0.000002094627363404981",
            "extra": "mean: 42.134873474227405 usec\nrounds: 3604"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17983.405791205827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025515137361042138",
            "extra": "mean: 55.60681950962904 usec\nrounds: 5618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595917572,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23610.27546359615,
            "unit": "iter/sec",
            "range": "stddev: 0.00000177683987291499",
            "extra": "mean: 42.3544401903258 usec\nrounds: 4623"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17912.319273358236,
            "unit": "iter/sec",
            "range": "stddev: 0.00000171375805842076",
            "extra": "mean: 55.827499763659475 usec\nrounds: 6349"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684990897,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20187.885407952643,
            "unit": "iter/sec",
            "range": "stddev: 0.000020904854825333614",
            "extra": "mean: 49.53465802842672 usec\nrounds: 3743"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13767.055733807476,
            "unit": "iter/sec",
            "range": "stddev: 0.00005213089169479722",
            "extra": "mean: 72.63717234356221 usec\nrounds: 7868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685766310,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19777.445839141492,
            "unit": "iter/sec",
            "range": "stddev: 0.000017629235207630604",
            "extra": "mean: 50.562646366645716 usec\nrounds: 4335"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13941.255746155824,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381508548742584",
            "extra": "mean: 71.72954992061895 usec\nrounds: 6921"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780580080,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21449.825125490937,
            "unit": "iter/sec",
            "range": "stddev: 0.000158595232870701",
            "extra": "mean: 46.62042670043038 usec\nrounds: 4352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17453.10771770723,
            "unit": "iter/sec",
            "range": "stddev: 0.000015335468686425717",
            "extra": "mean: 57.29638618946011 usec\nrounds: 7038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783649885,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24257.08833018134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034970153156642804",
            "extra": "mean: 41.22506322227356 usec\nrounds: 4413"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17121.01962936508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045514619499037624",
            "extra": "mean: 58.407736317576095 usec\nrounds: 5317"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793969318,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26279.850046446267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018387132838774457",
            "extra": "mean: 38.05196750486126 usec\nrounds: 4493"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19029.83206749072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021613424441198753",
            "extra": "mean: 52.54907118746111 usec\nrounds: 5928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890247544,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23918.852697135626,
            "unit": "iter/sec",
            "range": "stddev: 0.000004061109042715865",
            "extra": "mean: 41.808025353981705 usec\nrounds: 4378"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17017.014599272126,
            "unit": "iter/sec",
            "range": "stddev: 0.000005476389532819303",
            "extra": "mean: 58.76471423152997 usec\nrounds: 5277"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995402209,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26677.827726337728,
            "unit": "iter/sec",
            "range": "stddev: 0.000002276930964975519",
            "extra": "mean: 37.484311326170996 usec\nrounds: 4953"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19197.816799222397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011154824581076357",
            "extra": "mean: 52.089256317963454 usec\nrounds: 6964"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996630783,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23644.86019102107,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016867178016699181",
            "extra": "mean: 42.29248944257836 usec\nrounds: 4215"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16965.27109378863,
            "unit": "iter/sec",
            "range": "stddev: 0.000004347395065766702",
            "extra": "mean: 58.9439446308714 usec\nrounds: 5960"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035722846,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23359.045645888164,
            "unit": "iter/sec",
            "range": "stddev: 0.000001717195426091061",
            "extra": "mean: 42.80996814508249 usec\nrounds: 4615"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16694.12683589798,
            "unit": "iter/sec",
            "range": "stddev: 0.000001903955066875598",
            "extra": "mean: 59.9013060000038 usec\nrounds: 6098"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397752852,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25592.477963176734,
            "unit": "iter/sec",
            "range": "stddev: 0.000005050403619703082",
            "extra": "mean: 39.07398109080455 usec\nrounds: 4548"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17812.44112662248,
            "unit": "iter/sec",
            "range": "stddev: 0.000005956428460183936",
            "extra": "mean: 56.140536431326055 usec\nrounds: 7123"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468415842,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20573.058245215794,
            "unit": "iter/sec",
            "range": "stddev: 0.000018859174045429358",
            "extra": "mean: 48.60726043161556 usec\nrounds: 4074"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14253.302099579389,
            "unit": "iter/sec",
            "range": "stddev: 0.000024679599024089028",
            "extra": "mean: 70.15918087006027 usec\nrounds: 7956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479584523,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 29746.285353641822,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011449008347153959",
            "extra": "mean: 33.617642946384585 usec\nrounds: 4806"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21307.877926282566,
            "unit": "iter/sec",
            "range": "stddev: 0.000001295801653741069",
            "extra": "mean: 46.93099911026489 usec\nrounds: 6743"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482699944,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26672.804222388895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011220874197085041",
            "extra": "mean: 37.491371048290816 usec\nrounds: 3005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19253.36877680092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013365503372693073",
            "extra": "mean: 51.93896255729212 usec\nrounds: 6757"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646093778,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26797.355634001822,
            "unit": "iter/sec",
            "range": "stddev: 0.000001400524607857435",
            "extra": "mean: 37.317114929472744 usec\nrounds: 4481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19207.100173475912,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015864951224660029",
            "extra": "mean: 52.06408000000709 usec\nrounds: 6575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655472538,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23411.96282056566,
            "unit": "iter/sec",
            "range": "stddev: 0.000002020923132350002",
            "extra": "mean: 42.71320639214303 usec\nrounds: 4443"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16758.024909136006,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022675982274173388",
            "extra": "mean: 59.672903305856046 usec\nrounds: 6050"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734367887,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24315.061416245768,
            "unit": "iter/sec",
            "range": "stddev: 0.000004219724705753786",
            "extra": "mean: 41.12677253333459 usec\nrounds: 3750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17660.078847226025,
            "unit": "iter/sec",
            "range": "stddev: 0.000005576833391733044",
            "extra": "mean: 56.62488874771225 usec\nrounds: 6301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009411122,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22374.912718893538,
            "unit": "iter/sec",
            "range": "stddev: 0.000025515827075955604",
            "extra": "mean: 44.69291176968895 usec\nrounds: 4239"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15780.29212218426,
            "unit": "iter/sec",
            "range": "stddev: 0.000031351060719186154",
            "extra": "mean: 63.37018302685154 usec\nrounds: 8873"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016553999,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17855.477969569674,
            "unit": "iter/sec",
            "range": "stddev: 0.00007312207143822196",
            "extra": "mean: 56.005221574256204 usec\nrounds: 3773"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13126.44999582939,
            "unit": "iter/sec",
            "range": "stddev: 0.00003188281112361349",
            "extra": "mean: 76.18205991092226 usec\nrounds: 7628"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017760135,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26856.166791976,
            "unit": "iter/sec",
            "range": "stddev: 0.000004884605093758617",
            "extra": "mean: 37.235395793668395 usec\nrounds: 4990"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19003.499718910934,
            "unit": "iter/sec",
            "range": "stddev: 0.000006356203811680254",
            "extra": "mean: 52.621886220508685 usec\nrounds: 6662"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029705635,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20922.720331511584,
            "unit": "iter/sec",
            "range": "stddev: 0.000028363954321850188",
            "extra": "mean: 47.79493221509566 usec\nrounds: 4352"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14250.196070413383,
            "unit": "iter/sec",
            "range": "stddev: 0.00003690442004849808",
            "extra": "mean: 70.17447304295169 usec\nrounds: 7716"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033057976,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26054.168287504348,
            "unit": "iter/sec",
            "range": "stddev: 0.000004947135684336306",
            "extra": "mean: 38.38157445538581 usec\nrounds: 5003"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19055.891408143267,
            "unit": "iter/sec",
            "range": "stddev: 0.000007426856733730682",
            "extra": "mean: 52.477209204323245 usec\nrounds: 5932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074300016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20516.28349066302,
            "unit": "iter/sec",
            "range": "stddev: 0.0001460396231651707",
            "extra": "mean: 48.74177140587383 usec\nrounds: 4917"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15729.497665795097,
            "unit": "iter/sec",
            "range": "stddev: 0.00002985015967873521",
            "extra": "mean: 63.57482109391011 usec\nrounds: 9083"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099096958,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23782.95052856326,
            "unit": "iter/sec",
            "range": "stddev: 0.000003030995461784569",
            "extra": "mean: 42.04692764251445 usec\nrounds: 4533"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17145.6934725142,
            "unit": "iter/sec",
            "range": "stddev: 0.000003331553684198319",
            "extra": "mean: 58.32368353039049 usec\nrounds: 7037"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163517127,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26330.695349408765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011119989700259253",
            "extra": "mean: 37.978488100294484 usec\nrounds: 4874"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18989.81769287915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017400001536173512",
            "extra": "mean: 52.65979990818882 usec\nrounds: 6532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185030755,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24326.279283302378,
            "unit": "iter/sec",
            "range": "stddev: 0.00000346210217659549",
            "extra": "mean: 41.10780725461795 usec\nrounds: 4218"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18514.7769259434,
            "unit": "iter/sec",
            "range": "stddev: 0.000005953560283859884",
            "extra": "mean: 54.010912688814166 usec\nrounds: 7479"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186830281,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23904.802039633763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030288000205741145",
            "extra": "mean: 41.832599087916165 usec\nrounds: 4824"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18077.453044048187,
            "unit": "iter/sec",
            "range": "stddev: 0.000006426301385463888",
            "extra": "mean: 55.31752717395327 usec\nrounds: 6072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249200353,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23373.291513535856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015257822933294127",
            "extra": "mean: 42.78387575069963 usec\nrounds: 4829"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16884.636495439285,
            "unit": "iter/sec",
            "range": "stddev: 0.000002669904307705063",
            "extra": "mean: 59.22543847894566 usec\nrounds: 6575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251380228,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30128.520334369554,
            "unit": "iter/sec",
            "range": "stddev: 0.000003008895486803192",
            "extra": "mean: 33.19114211059463 usec\nrounds: 4975"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21556.777613351136,
            "unit": "iter/sec",
            "range": "stddev: 0.000004053321492895066",
            "extra": "mean: 46.38912262010128 usec\nrounds: 7038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252245014,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26734.01263364191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012368275127951981",
            "extra": "mean: 37.40553330709534 usec\nrounds: 5074"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19146.870859665483,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015453281766204336",
            "extra": "mean: 52.227855263106484 usec\nrounds: 6840"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261948249,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23078.18742568765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018060830684619478",
            "extra": "mean: 43.33095929738959 usec\nrounds: 4668"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16757.987531275507,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024696959222807165",
            "extra": "mean: 59.6730364033089 usec\nrounds: 5494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617624351,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22467.156897631943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015947978487148727",
            "extra": "mean: 44.50941454481056 usec\nrounds: 4084"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16065.252266360061,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017961236011580767",
            "extra": "mean: 62.246143628504136 usec\nrounds: 5925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677428643,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24100.553321877444,
            "unit": "iter/sec",
            "range": "stddev: 0.000002824335199930848",
            "extra": "mean: 41.49282328270211 usec\nrounds: 4527"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17381.285064225398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039126064215458136",
            "extra": "mean: 57.53314535173382 usec\nrounds: 6013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700879838,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20615.241340570992,
            "unit": "iter/sec",
            "range": "stddev: 0.000014067521540583633",
            "extra": "mean: 48.50779981081232 usec\nrounds: 4231"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14906.64730636697,
            "unit": "iter/sec",
            "range": "stddev: 0.000016301249963220382",
            "extra": "mean: 67.08416583874478 usec\nrounds: 8858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702086923,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26791.02871219551,
            "unit": "iter/sec",
            "range": "stddev: 0.00000109562297815333",
            "extra": "mean: 37.32592767312408 usec\nrounds: 5171"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19205.342911947784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012779550859517039",
            "extra": "mean: 52.0688437891881 usec\nrounds: 7189"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705526068,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23505.906950298002,
            "unit": "iter/sec",
            "range": "stddev: 0.000001718847446900884",
            "extra": "mean: 42.54249802462194 usec\nrounds: 4556"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17066.49068325292,
            "unit": "iter/sec",
            "range": "stddev: 0.000003285503976697244",
            "extra": "mean: 58.5943541973327 usec\nrounds: 6087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765241480,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26738.76319804477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011771382252017018",
            "extra": "mean: 37.39888762218903 usec\nrounds: 4912"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18923.113413527346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016777420400683256",
            "extra": "mean: 52.84542655042915 usec\nrounds: 6998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854664157,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23838.90808029621,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017329757731526225",
            "extra": "mean: 41.94823003770626 usec\nrounds: 4521"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16939.588950073707,
            "unit": "iter/sec",
            "range": "stddev: 0.000004642296639850044",
            "extra": "mean: 59.0333096598338 usec\nrounds: 5942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949820323,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23941.258684199744,
            "unit": "iter/sec",
            "range": "stddev: 0.000002606314956164266",
            "extra": "mean: 41.76889833532267 usec\nrounds: 4505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17065.083771807767,
            "unit": "iter/sec",
            "range": "stddev: 0.000004718443117889108",
            "extra": "mean: 58.59918494229965 usec\nrounds: 6402"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962576583,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18721.664397980378,
            "unit": "iter/sec",
            "range": "stddev: 0.000015574312108773857",
            "extra": "mean: 53.41405436729632 usec\nrounds: 3366"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13266.509322714386,
            "unit": "iter/sec",
            "range": "stddev: 0.000023840908984311776",
            "extra": "mean: 75.37777840986702 usec\nrounds: 7559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048963602,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23682.63392273944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021262980334032955",
            "extra": "mean: 42.22503304583138 usec\nrounds: 4751"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16854.238388864334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019691549815516922",
            "extra": "mean: 59.33225678478027 usec\nrounds: 6227"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116179236,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23216.216958064848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042513653900975906",
            "extra": "mean: 43.073339717934545 usec\nrounds: 4751"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16838.236824942684,
            "unit": "iter/sec",
            "range": "stddev: 0.000006178853915006771",
            "extra": "mean: 59.38864088897289 usec\nrounds: 5625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285728539,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26354.773450893477,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010745777804663225",
            "extra": "mean: 37.943790405305045 usec\nrounds: 5253"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19023.173161553546,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013411162865989355",
            "extra": "mean: 52.56746555937537 usec\nrounds: 6562"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962506789,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28812.78278659682,
            "unit": "iter/sec",
            "range": "stddev: 0.000002328878622541204",
            "extra": "mean: 34.70681771373995 usec\nrounds: 2913"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21378.971209987056,
            "unit": "iter/sec",
            "range": "stddev: 0.000002865030935316055",
            "extra": "mean: 46.774935527901185 usec\nrounds: 7321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981411826,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31784.94639844907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011920796582988882",
            "extra": "mean: 31.46143421052912 usec\nrounds: 2888"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24033.46177364314,
            "unit": "iter/sec",
            "range": "stddev: 0.000013438538883301935",
            "extra": "mean: 41.6086541929916 usec\nrounds: 8097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985594833,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31652.032346073345,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110799617291866",
            "extra": "mean: 31.593547898167014 usec\nrounds: 2902"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23979.555266608713,
            "unit": "iter/sec",
            "range": "stddev: 0.000008541502646795288",
            "extra": "mean: 41.702191257587245 usec\nrounds: 7801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987169245,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27908.46654227844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020839744679955124",
            "extra": "mean: 35.8314204933153 usec\nrounds: 4704"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20881.578504514513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016843787430199006",
            "extra": "mean: 47.8890999444225 usec\nrounds: 7174"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093633579,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32463.52343706611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011154062949546935",
            "extra": "mean: 30.8038035963226 usec\nrounds: 5005"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24187.061567196317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014487776442712458",
            "extra": "mean: 41.34441867697767 usec\nrounds: 7710"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133399469,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31271.508096593614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045636188640416",
            "extra": "mean: 31.977990857080844 usec\nrounds: 4375"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22116.142343215866,
            "unit": "iter/sec",
            "range": "stddev: 0.000006970617921352274",
            "extra": "mean: 45.21584209765001 usec\nrounds: 6979"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142119557,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26165.520971996008,
            "unit": "iter/sec",
            "range": "stddev: 0.00004386898767946978",
            "extra": "mean: 38.21823387618627 usec\nrounds: 4605"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20859.861052796015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014906763592112255",
            "extra": "mean: 47.938957861177215 usec\nrounds: 8211"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326608858,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28203.189452602128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013804311442947874",
            "extra": "mean: 35.45698268206812 usec\nrounds: 4735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21111.14428979162,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022007066472765305",
            "extra": "mean: 47.368346607509764 usec\nrounds: 7458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328507300,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27177.828074138528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014951927510223781",
            "extra": "mean: 36.79469887262864 usec\nrounds: 4792"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20240.168260073457,
            "unit": "iter/sec",
            "range": "stddev: 0.000002087132575718149",
            "extra": "mean: 49.406703894484856 usec\nrounds: 6984"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483006147,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27194.521260764228,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982038475536204",
            "extra": "mean: 36.77211267707743 usec\nrounds: 4686"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20993.460705543595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011844187148602819",
            "extra": "mean: 47.6338805700547 usec\nrounds: 8482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595924905,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26883.238753039815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012181953437616325",
            "extra": "mean: 37.1978990026611 usec\nrounds: 4713"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20485.87267883866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012877451841950647",
            "extra": "mean: 48.81412745637984 usec\nrounds: 7226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981415,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30782.36612259276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010838844278734564",
            "extra": "mean: 32.48613170337314 usec\nrounds: 4867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 23621.84052933161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012431761424193462",
            "extra": "mean: 42.33370379239857 usec\nrounds: 7937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685774723,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27721.231673415416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011473935164927807",
            "extra": "mean: 36.07343323633766 usec\nrounds: 4808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20950.58924992372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014852952898218747",
            "extra": "mean: 47.731354382008185 usec\nrounds: 8124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780582113,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25676.020592607914,
            "unit": "iter/sec",
            "range": "stddev: 0.000007896025127308266",
            "extra": "mean: 38.94684522444644 usec\nrounds: 4471"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19074.23436459067,
            "unit": "iter/sec",
            "range": "stddev: 0.00001387034890455128",
            "extra": "mean: 52.426743893657715 usec\nrounds: 5650"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783661244,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26214.374697178573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013649735618596321",
            "extra": "mean: 38.147009476736784 usec\nrounds: 4643"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 18526.112802041484,
            "unit": "iter/sec",
            "range": "stddev: 0.00000140846712300934",
            "extra": "mean: 53.97786414696801 usec\nrounds: 6588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793997666,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 34490.51880000527,
            "unit": "iter/sec",
            "range": "stddev: 0.000005323524035095843",
            "extra": "mean: 28.993475157580033 usec\nrounds: 5394"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21371.399952424163,
            "unit": "iter/sec",
            "range": "stddev: 0.000007286535415026202",
            "extra": "mean: 46.79150650992191 usec\nrounds: 7143"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890239901,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 34504.55840673214,
            "unit": "iter/sec",
            "range": "stddev: 0.000004706645707459703",
            "extra": "mean: 28.98167796301637 usec\nrounds: 5459"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24042.68464039859,
            "unit": "iter/sec",
            "range": "stddev: 0.000008100430110888219",
            "extra": "mean: 41.59269295242154 usec\nrounds: 7875"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995411624,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31235.13275376598,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033446786327042794",
            "extra": "mean: 32.01523130646631 usec\nrounds: 4868"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21748.003395150907,
            "unit": "iter/sec",
            "range": "stddev: 0.000004768509227504087",
            "extra": "mean: 45.98123247594156 usec\nrounds: 7347"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996638828,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23417.93203780165,
            "unit": "iter/sec",
            "range": "stddev: 0.00003576301173523023",
            "extra": "mean: 42.7023188207132 usec\nrounds: 4341"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15076.143941050404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033153853916522",
            "extra": "mean: 66.32995837066323 usec\nrounds: 5597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035732210,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20660.36152976225,
            "unit": "iter/sec",
            "range": "stddev: 0.000053030880017687125",
            "extra": "mean: 48.40186356659111 usec\nrounds: 4515"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15031.460016878176,
            "unit": "iter/sec",
            "range": "stddev: 0.00003391534506210861",
            "extra": "mean: 66.5271370097877 usec\nrounds: 7525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397714285,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 33721.83930948191,
            "unit": "iter/sec",
            "range": "stddev: 0.000004305332056400694",
            "extra": "mean: 29.654372966507196 usec\nrounds: 5963"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24003.540793055523,
            "unit": "iter/sec",
            "range": "stddev: 0.00000534452762771975",
            "extra": "mean: 41.66052036328367 usec\nrounds: 6826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468394274,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31645.027849378966,
            "unit": "iter/sec",
            "range": "stddev: 0.000001041483070343201",
            "extra": "mean: 31.600540999986038 usec\nrounds: 5000"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22442.76854950062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016590277500064332",
            "extra": "mean: 44.55778251218704 usec\nrounds: 7205"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479593522,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31157.707935543865,
            "unit": "iter/sec",
            "range": "stddev: 0.000001098803084544524",
            "extra": "mean: 32.09478701285428 usec\nrounds: 3080"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22195.553558224987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023961012949677814",
            "extra": "mean: 45.05406893217272 usec\nrounds: 7210"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482733512,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26063.058000950205,
            "unit": "iter/sec",
            "range": "stddev: 0.000027865846929178158",
            "extra": "mean: 38.36848308297292 usec\nrounds: 4463"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19493.24159385462,
            "unit": "iter/sec",
            "range": "stddev: 0.000012531709781969387",
            "extra": "mean: 51.29983103042529 usec\nrounds: 7599"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646089988,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30942.156786499607,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011495859903292523",
            "extra": "mean: 32.31836768522583 usec\nrounds: 3076"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22204.24582252917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035189678275678907",
            "extra": "mean: 45.036431680348564 usec\nrounds: 7582"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655473853,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28113.7021937582,
            "unit": "iter/sec",
            "range": "stddev: 0.00000238405170638598",
            "extra": "mean: 35.56984395395708 usec\nrounds: 2935"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19997.327057653943,
            "unit": "iter/sec",
            "range": "stddev: 0.000002899681585837664",
            "extra": "mean: 50.006683249062114 usec\nrounds: 7337"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734361731,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31660.28932744792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014706694076254877",
            "extra": "mean: 31.58530832291065 usec\nrounds: 3172"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22228.636215683637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016455965106038182",
            "extra": "mean: 44.98701541097875 usec\nrounds: 8111"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009406182,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28240.19144270069,
            "unit": "iter/sec",
            "range": "stddev: 0.00000692663101561939",
            "extra": "mean: 35.410524819882994 usec\nrounds: 4855"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20506.764502545444,
            "unit": "iter/sec",
            "range": "stddev: 0.000011376819368077945",
            "extra": "mean: 48.7643967372753 usec\nrounds: 8091"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016542104,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24762.94787155428,
            "unit": "iter/sec",
            "range": "stddev: 0.000039584869623246324",
            "extra": "mean: 40.38291423085057 usec\nrounds: 4687"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16866.26619771454,
            "unit": "iter/sec",
            "range": "stddev: 0.000012182438680165962",
            "extra": "mean: 59.289945283533164 usec\nrounds: 8937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017773187,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28108.276455527346,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012355370203025846",
            "extra": "mean: 35.57670999793213 usec\nrounds: 4831"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19799.20778048364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015805268689533464",
            "extra": "mean: 50.5070713478604 usec\nrounds: 7190"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029695071,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30714.96979289027,
            "unit": "iter/sec",
            "range": "stddev: 0.000004450500825581463",
            "extra": "mean: 32.557414405514876 usec\nrounds: 5012"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21904.222443575938,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076679445638167",
            "extra": "mean: 45.65329824311018 usec\nrounds: 6830"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033041569,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31409.682855946143,
            "unit": "iter/sec",
            "range": "stddev: 0.000007141094690901115",
            "extra": "mean: 31.837316046337946 usec\nrounds: 4917"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24840.243536189213,
            "unit": "iter/sec",
            "range": "stddev: 0.000034382276399031054",
            "extra": "mean: 40.25725426335381 usec\nrounds: 7154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074323627,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19964.893403726925,
            "unit": "iter/sec",
            "range": "stddev: 0.00015850859240870108",
            "extra": "mean: 50.08792082072054 usec\nrounds: 4193"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14843.521891608907,
            "unit": "iter/sec",
            "range": "stddev: 0.000037195958765774637",
            "extra": "mean: 67.36945633942193 usec\nrounds: 4867"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099106872,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23639.86115526056,
            "unit": "iter/sec",
            "range": "stddev: 0.000018365249934565893",
            "extra": "mean: 42.30143288204003 usec\nrounds: 4209"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15110.264430565303,
            "unit": "iter/sec",
            "range": "stddev: 0.00003473416624124255",
            "extra": "mean: 66.18017868550221 usec\nrounds: 7807"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163536412,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27691.822860083204,
            "unit": "iter/sec",
            "range": "stddev: 0.000001938070694082574",
            "extra": "mean: 36.11174334938655 usec\nrounds: 3195"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19984.343901495606,
            "unit": "iter/sec",
            "range": "stddev: 0.000003662132457923063",
            "extra": "mean: 50.03917090944182 usec\nrounds: 5342"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185076343,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28171.346125350276,
            "unit": "iter/sec",
            "range": "stddev: 0.000002190972102938616",
            "extra": "mean: 35.49706128881572 usec\nrounds: 4748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20338.565077312815,
            "unit": "iter/sec",
            "range": "stddev: 0.000003795995042391378",
            "extra": "mean: 49.16767708039916 usec\nrounds: 7042"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186822171,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31660.838098658645,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010061565077229732",
            "extra": "mean: 31.584760860842987 usec\nrounds: 4926"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22471.735013144535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011770638312938763",
            "extra": "mean: 44.500346742922325 usec\nrounds: 7184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249212780,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23553.297744541218,
            "unit": "iter/sec",
            "range": "stddev: 0.00003894909960415059",
            "extra": "mean: 42.45689970236813 usec\nrounds: 4706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15705.906998597076,
            "unit": "iter/sec",
            "range": "stddev: 0.00006647089878627116",
            "extra": "mean: 63.67031207362457 usec\nrounds: 8796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251406706,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27688.7880800382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016413420298928476",
            "extra": "mean: 36.115701312363846 usec\nrounds: 4724"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19581.943912517876,
            "unit": "iter/sec",
            "range": "stddev: 0.000002283514230653429",
            "extra": "mean: 51.06745297951466 usec\nrounds: 7837"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252245299,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 32671.16484186099,
            "unit": "iter/sec",
            "range": "stddev: 0.000003688947154518574",
            "extra": "mean: 30.608030195443703 usec\nrounds: 5266"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22930.219884566708,
            "unit": "iter/sec",
            "range": "stddev: 0.000006184782463324103",
            "extra": "mean: 43.61057177096914 usec\nrounds: 6270"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261937291,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 36497.91772957887,
            "unit": "iter/sec",
            "range": "stddev: 9.489615065432191e-7",
            "extra": "mean: 27.39882333587414 usec\nrounds: 5168"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 25708.56419405618,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010694758372785961",
            "extra": "mean: 38.89754373101863 usec\nrounds: 7912"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617621941,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27903.768836831096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024634695308144853",
            "extra": "mean: 35.83745284902401 usec\nrounds: 4931"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19870.459516549334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028534632425153807",
            "extra": "mean: 50.32596247545955 usec\nrounds: 7062"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677416424,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 35329.857529431516,
            "unit": "iter/sec",
            "range": "stddev: 0.000005115794952278532",
            "extra": "mean: 28.304671174146417 usec\nrounds: 4437"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 24507.195112036512,
            "unit": "iter/sec",
            "range": "stddev: 0.000007260804458022061",
            "extra": "mean: 40.80434319098631 usec\nrounds: 9671"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700895071,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27136.62030804239,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018959452184394312",
            "extra": "mean: 36.8505727186533 usec\nrounds: 3988"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19461.22392545063,
            "unit": "iter/sec",
            "range": "stddev: 0.000004314414650928506",
            "extra": "mean: 51.384229677982326 usec\nrounds: 7332"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702102837,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28620.374552772835,
            "unit": "iter/sec",
            "range": "stddev: 0.000017869105739023417",
            "extra": "mean: 34.940143713217644 usec\nrounds: 2505"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22488.258579309535,
            "unit": "iter/sec",
            "range": "stddev: 0.000011745748274121425",
            "extra": "mean: 44.46764948354233 usec\nrounds: 8613"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705520460,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31386.31299272539,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010572478778039231",
            "extra": "mean: 31.861021720893962 usec\nrounds: 4788"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22373.628320953845,
            "unit": "iter/sec",
            "range": "stddev: 0.000002940884176159197",
            "extra": "mean: 44.695477445804265 usec\nrounds: 7094"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765245616,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31809.9119205387,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011687395533127222",
            "extra": "mean: 31.436742185832028 usec\nrounds: 5023"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22555.27259974025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014738231615713278",
            "extra": "mean: 44.33553155156796 usec\nrounds: 6735"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854647295,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 31025.610662493833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012665343263011957",
            "extra": "mean: 32.23143650187287 usec\nrounds: 5008"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 22295.218141451678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013473146729209716",
            "extra": "mean: 44.8526672246719 usec\nrounds: 8369"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949739386,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28059.190260831354,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729111718579375",
            "extra": "mean: 35.63894719356635 usec\nrounds: 5113"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19288.28468162841,
            "unit": "iter/sec",
            "range": "stddev: 0.00002059865599882017",
            "extra": "mean: 51.844941968970105 usec\nrounds: 8461"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962573948,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28737.094199174684,
            "unit": "iter/sec",
            "range": "stddev: 0.000003000279585976456",
            "extra": "mean: 34.79822953110964 usec\nrounds: 4287"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20726.322963274986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046405176223803115",
            "extra": "mean: 48.24782484437312 usec\nrounds: 7068"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048957392,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27483.602099328105,
            "unit": "iter/sec",
            "range": "stddev: 0.000002150305530393858",
            "extra": "mean: 36.38533247519426 usec\nrounds: 4662"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19929.00074528705,
            "unit": "iter/sec",
            "range": "stddev: 0.000004309132505266567",
            "extra": "mean: 50.17813049339602 usec\nrounds: 7441"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116191589,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22602.360809431873,
            "unit": "iter/sec",
            "range": "stddev: 0.000015823252946202274",
            "extra": "mean: 44.24316594320997 usec\nrounds: 3688"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15418.807735565384,
            "unit": "iter/sec",
            "range": "stddev: 0.000043741404034241455",
            "extra": "mean: 64.85585767396117 usec\nrounds: 8614"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285741391,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27918.98461845314,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011117897378139788",
            "extra": "mean: 35.81792152065039 usec\nrounds: 4893"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19631.616652714343,
            "unit": "iter/sec",
            "range": "stddev: 0.000004486395399703237",
            "extra": "mean: 50.938239967197816 usec\nrounds: 7326"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962521705,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14906.451255442928,
            "unit": "iter/sec",
            "range": "stddev: 0.00007040688682487832",
            "extra": "mean: 67.08504813544143 usec\nrounds: 1475"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10497.840102686725,
            "unit": "iter/sec",
            "range": "stddev: 0.00006512957798268498",
            "extra": "mean: 95.25769017419772 usec\nrounds: 5048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985584576,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22353.47378436993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015323682449549934",
            "extra": "mean: 44.73577617717849 usec\nrounds: 1805"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15961.931593455236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016156827984624716",
            "extra": "mean: 62.64905936635033 usec\nrounds: 5525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987196575,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 13907.416857779173,
            "unit": "iter/sec",
            "range": "stddev: 0.00014840776133096648",
            "extra": "mean: 71.90407896924766 usec\nrounds: 1203"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10174.494249470887,
            "unit": "iter/sec",
            "range": "stddev: 0.00007018315314308765",
            "extra": "mean: 98.2849835560135 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093669956,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16145.929360157023,
            "unit": "iter/sec",
            "range": "stddev: 0.00002483167522762264",
            "extra": "mean: 61.935115513863174 usec\nrounds: 1186"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11091.396256373771,
            "unit": "iter/sec",
            "range": "stddev: 0.000045745751669790074",
            "extra": "mean: 90.15997417145212 usec\nrounds: 6427"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133393013,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20523.958193620823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018909031827176695",
            "extra": "mean: 48.723544969547646 usec\nrounds: 1312"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14395.948826097192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021527871996646043",
            "extra": "mean: 69.46398685352263 usec\nrounds: 5781"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142083122,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22915.934107017027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017404027594816092",
            "extra": "mean: 43.63775857139477 usec\nrounds: 1400"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16305.44842927934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017505190238671172",
            "extra": "mean: 61.32919338816354 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326565762,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23032.61740411681,
            "unit": "iter/sec",
            "range": "stddev: 0.000006639964564978625",
            "extra": "mean: 43.41668957785327 usec\nrounds: 1382"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16285.279351123976,
            "unit": "iter/sec",
            "range": "stddev: 0.00000856694707500861",
            "extra": "mean: 61.405148689143125 usec\nrounds: 5468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328473205,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24211.210924739018,
            "unit": "iter/sec",
            "range": "stddev: 0.000006710469090655634",
            "extra": "mean: 41.30317988259728 usec\nrounds: 1362"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15936.507236688201,
            "unit": "iter/sec",
            "range": "stddev: 0.000009417261877277977",
            "extra": "mean: 62.74900673956033 usec\nrounds: 5935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608482997861,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20426.545158460885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017349413260799702",
            "extra": "mean: 48.95590479165243 usec\nrounds: 1334"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14363.920672027987,
            "unit": "iter/sec",
            "range": "stddev: 0.000002784909360741377",
            "extra": "mean: 69.61887515484405 usec\nrounds: 5095"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595900813,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15942.590514272852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003930497786102084",
            "extra": "mean: 62.725063351826954 usec\nrounds: 1247"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12146.375294401252,
            "unit": "iter/sec",
            "range": "stddev: 0.00005307744622567922",
            "extra": "mean: 82.329087959347 usec\nrounds: 7458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684990778,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18486.200837127668,
            "unit": "iter/sec",
            "range": "stddev: 0.000019776276622450113",
            "extra": "mean: 54.09440310697052 usec\nrounds: 1223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13202.574383008714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003596384615163786",
            "extra": "mean: 75.74280371311278 usec\nrounds: 6302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685782329,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15138.06215676802,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652877883213016",
            "extra": "mean: 66.0586533232666 usec\nrounds: 1249"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10289.289957352441,
            "unit": "iter/sec",
            "range": "stddev: 0.000017957498473608156",
            "extra": "mean: 97.18843614523932 usec\nrounds: 5168"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780567496,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22734.310386081102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012572192567142294",
            "extra": "mean: 43.98637931028873 usec\nrounds: 1508"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16146.397646692389,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013211657802718193",
            "extra": "mean: 61.93331923822967 usec\nrounds: 6196"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783663841,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18668.682347338905,
            "unit": "iter/sec",
            "range": "stddev: 0.000030081049954180297",
            "extra": "mean: 53.565644398172715 usec\nrounds: 1437"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12750.714003811197,
            "unit": "iter/sec",
            "range": "stddev: 0.00009916000331167405",
            "extra": "mean: 78.42698061466199 usec\nrounds: 6345"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793998258,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17282.395692811886,
            "unit": "iter/sec",
            "range": "stddev: 0.000013581243908310984",
            "extra": "mean: 57.862348355785024 usec\nrounds: 821"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11065.960463728266,
            "unit": "iter/sec",
            "range": "stddev: 0.00002991714113158808",
            "extra": "mean: 90.36721243291764 usec\nrounds: 6515"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890239409,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22659.15246765075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021525267228457047",
            "extra": "mean: 44.13227729623365 usec\nrounds: 1154"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15244.055220949907,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017293578663656819",
            "extra": "mean: 65.59934253096249 usec\nrounds: 4204"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995422500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20304.981123000904,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018511010934509824",
            "extra": "mean: 49.24899924517677 usec\nrounds: 1325"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13714.607983039896,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020043813603843403",
            "extra": "mean: 72.91495325543721 usec\nrounds: 5391"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996641244,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16504.13752194481,
            "unit": "iter/sec",
            "range": "stddev: 0.00001759657263128377",
            "extra": "mean: 60.59086690657691 usec\nrounds: 1390"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10809.594396217562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004375129650536469",
            "extra": "mean: 92.51040911858033 usec\nrounds: 6536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035714218,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21467.30729035353,
            "unit": "iter/sec",
            "range": "stddev: 0.000005468610852703855",
            "extra": "mean: 46.58246078442061 usec\nrounds: 1734"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14079.44451029262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005616076560742761",
            "extra": "mean: 71.0255293998965 usec\nrounds: 5051"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397722976,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22578.462505070496,
            "unit": "iter/sec",
            "range": "stddev: 0.000001438835897820302",
            "extra": "mean: 44.28999537835793 usec\nrounds: 1731"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15496.357582296714,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014309790794877076",
            "extra": "mean: 64.53129354361415 usec\nrounds: 5328"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468415714,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18476.730165186244,
            "unit": "iter/sec",
            "range": "stddev: 0.000015250329421926713",
            "extra": "mean: 54.12213043432299 usec\nrounds: 1633"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11483.303832252299,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168338414592567",
            "extra": "mean: 87.08295231128298 usec\nrounds: 6165"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479601406,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22714.492819501174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016475828493752056",
            "extra": "mean: 44.02475582203912 usec\nrounds: 1417"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15502.3779857405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015539880362113824",
            "extra": "mean: 64.50623258701513 usec\nrounds: 5628"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482711646,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21428.111978587887,
            "unit": "iter/sec",
            "range": "stddev: 0.000005251206960415311",
            "extra": "mean: 46.66766726808472 usec\nrounds: 1662"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14693.766887262987,
            "unit": "iter/sec",
            "range": "stddev: 0.000008521719197430397",
            "extra": "mean: 68.05606810509775 usec\nrounds: 5051"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646111785,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24321.139525268238,
            "unit": "iter/sec",
            "range": "stddev: 0.00000632065881671601",
            "extra": "mean: 41.11649451955401 usec\nrounds: 1551"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16441.002863823356,
            "unit": "iter/sec",
            "range": "stddev: 0.000008780488263766726",
            "extra": "mean: 60.823540284175216 usec\nrounds: 6330"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655491306,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15013.098928594596,
            "unit": "iter/sec",
            "range": "stddev: 0.00002120767380192556",
            "extra": "mean: 66.60850000097959 usec\nrounds: 804"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9848.29857223903,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002152759755163",
            "extra": "mean: 101.54038209390397 usec\nrounds: 4881"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734383178,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20660.909725094014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039248188404846534",
            "extra": "mean: 48.400579321317835 usec\nrounds: 1267"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14234.100048256443,
            "unit": "iter/sec",
            "range": "stddev: 0.000005548935499361482",
            "extra": "mean: 70.25382683905552 usec\nrounds: 5492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009426338,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21459.886849642433,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035221490714793486",
            "extra": "mean: 46.598568156786996 usec\nrounds: 1614"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14668.602240452909,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841415780497891",
            "extra": "mean: 68.17282135050408 usec\nrounds: 5480"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016523907,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22922.372475477943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012389448575147945",
            "extra": "mean: 43.62550172630635 usec\nrounds: 1738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15491.762527376093,
            "unit": "iter/sec",
            "range": "stddev: 0.000009159194217686862",
            "extra": "mean: 64.55043435069841 usec\nrounds: 5438"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029693414,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22877.381449672506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014180301862013152",
            "extra": "mean: 43.71129633869506 usec\nrounds: 1748"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15345.08018572999,
            "unit": "iter/sec",
            "range": "stddev: 0.000002443513065378482",
            "extra": "mean: 65.1674665688577 usec\nrounds: 5459"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033050570,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22682.283365413736,
            "unit": "iter/sec",
            "range": "stddev: 0.000001356818991041796",
            "extra": "mean: 44.08727216259074 usec\nrounds: 1771"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15452.766248361182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018199496659950591",
            "extra": "mean: 64.71333248220546 usec\nrounds: 5092"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074298809,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21214.46434783314,
            "unit": "iter/sec",
            "range": "stddev: 0.000002912468476060915",
            "extra": "mean: 47.13765021845299 usec\nrounds: 1601"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15182.270416929217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060253622073049375",
            "extra": "mean: 65.86630145152303 usec\nrounds: 6545"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099073042,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25726.149075144138,
            "unit": "iter/sec",
            "range": "stddev: 0.000005103110164006392",
            "extra": "mean: 38.87095565990368 usec\nrounds: 1917"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17532.245075315077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034867062645265697",
            "extra": "mean: 57.037760749076725 usec\nrounds: 5768"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163529405,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22851.464019197665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013113759669080952",
            "extra": "mean: 43.76087235198119 usec\nrounds: 1841"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15585.795985904859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017255077156583595",
            "extra": "mean: 64.16098355864264 usec\nrounds: 5474"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185038652,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21461.145828704153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055019679660353146",
            "extra": "mean: 46.59583453659339 usec\nrounds: 1662"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14705.539604481577,
            "unit": "iter/sec",
            "range": "stddev: 0.00000790847849032374",
            "extra": "mean: 68.00158490581643 usec\nrounds: 5247"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186842506,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20488.422828897754,
            "unit": "iter/sec",
            "range": "stddev: 0.000006219055629237072",
            "extra": "mean: 48.80805166660057 usec\nrounds: 1800"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14654.262949276617,
            "unit": "iter/sec",
            "range": "stddev: 0.00000557707048963201",
            "extra": "mean: 68.239528897587 usec\nrounds: 5606"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249205808,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19763.039369356593,
            "unit": "iter/sec",
            "range": "stddev: 0.000005948817452035108",
            "extra": "mean: 50.59950452512589 usec\nrounds: 1768"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14027.635676059752,
            "unit": "iter/sec",
            "range": "stddev: 0.000004916273676018365",
            "extra": "mean: 71.28785086047316 usec\nrounds: 5230"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251397404,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23621.642357493252,
            "unit": "iter/sec",
            "range": "stddev: 0.000004690126712363792",
            "extra": "mean: 42.33405894754732 usec\nrounds: 1900"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16011.445546507228,
            "unit": "iter/sec",
            "range": "stddev: 0.000006578496022695662",
            "extra": "mean: 62.455322793646346 usec\nrounds: 5914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252252755,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24740.643645965658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069422505946668366",
            "extra": "mean: 40.41932030184127 usec\nrounds: 1867"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16575.557258410634,
            "unit": "iter/sec",
            "range": "stddev: 0.000009809677209114002",
            "extra": "mean: 60.32979672478814 usec\nrounds: 5618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261938896,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21404.541998931254,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037078858828237738",
            "extra": "mean: 46.71905617274739 usec\nrounds: 1620"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14945.03817156616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057809060748721236",
            "extra": "mean: 66.91183980396654 usec\nrounds: 5100"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617634386,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17363.58288770757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962449754631641",
            "extra": "mean: 57.591800405891064 usec\nrounds: 1478"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11062.225581599158,
            "unit": "iter/sec",
            "range": "stddev: 0.00002747044148319412",
            "extra": "mean: 90.397722648451 usec\nrounds: 7038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677435330,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20831.931357618832,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037951739110563446",
            "extra": "mean: 48.00323036943339 usec\nrounds: 1732"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13931.064981172864,
            "unit": "iter/sec",
            "range": "stddev: 0.000004365332970329147",
            "extra": "mean: 71.78202106956287 usec\nrounds: 4936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700862105,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22606.878694339895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013698975611500192",
            "extra": "mean: 44.23432414180959 usec\nrounds: 1777"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15361.828426912696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019084321217134764",
            "extra": "mean: 65.09641770559551 usec\nrounds: 5535"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702134115,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15974.571740486188,
            "unit": "iter/sec",
            "range": "stddev: 0.000009759322360645323",
            "extra": "mean: 62.599487250452256 usec\nrounds: 1451"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9813.46674065451,
            "unit": "iter/sec",
            "range": "stddev: 0.00007507804447763203",
            "extra": "mean: 101.90078862317567 usec\nrounds: 6065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705529939,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20964.38300028118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034746736556563737",
            "extra": "mean: 47.699949003344756 usec\nrounds: 1706"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14266.136423047645,
            "unit": "iter/sec",
            "range": "stddev: 0.00000766526551168311",
            "extra": "mean: 70.09606317688444 usec\nrounds: 4986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765267100,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20357.25522588234,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026498937524209864",
            "extra": "mean: 49.12253586763474 usec\nrounds: 1631"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13842.862653117303,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037089521017348957",
            "extra": "mean: 72.23939332915421 usec\nrounds: 4917"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854665471,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16375.788601589888,
            "unit": "iter/sec",
            "range": "stddev: 0.000016658304465518412",
            "extra": "mean: 61.0657614316609 usec\nrounds: 1006"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10538.38552128995,
            "unit": "iter/sec",
            "range": "stddev: 0.000026425898352380636",
            "extra": "mean: 94.89119542834821 usec\nrounds: 5731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949755155,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17176.977819217038,
            "unit": "iter/sec",
            "range": "stddev: 0.000031338680520083126",
            "extra": "mean: 58.217458887397115 usec\nrounds: 1654"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11928.958644408809,
            "unit": "iter/sec",
            "range": "stddev: 0.00007064268120051698",
            "extra": "mean: 83.8296141188072 usec\nrounds: 6502"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962578761,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17515.488122234645,
            "unit": "iter/sec",
            "range": "stddev: 0.000022646674015794542",
            "extra": "mean: 57.09232840223119 usec\nrounds: 1690"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11771.263991006015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000600942970871532",
            "extra": "mean: 84.95264406303883 usec\nrounds: 7226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048950035,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22734.233062507214,
            "unit": "iter/sec",
            "range": "stddev: 0.000004569956384381071",
            "extra": "mean: 43.98652891656933 usec\nrounds: 1781"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15348.1928207537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013593263564501118",
            "extra": "mean: 65.15425051526641 usec\nrounds: 5337"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116185663,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21404.16748860969,
            "unit": "iter/sec",
            "range": "stddev: 0.000004519464019756433",
            "extra": "mean: 46.71987361957216 usec\nrounds: 1630"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14891.101451044415,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942400073549895",
            "extra": "mean: 67.15419965994948 usec\nrounds: 4713"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285754214,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18351.281850478572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006286040763858968",
            "extra": "mean: 54.49210622711468 usec\nrounds: 1638"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12812.159776943316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942889436947661",
            "extra": "mean: 78.0508530497406 usec\nrounds: 5689"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962528740,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16154.59167273046,
            "unit": "iter/sec",
            "range": "stddev: 0.000038837952474177106",
            "extra": "mean: 61.90190505947832 usec\nrounds: 1601"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10952.920294532702,
            "unit": "iter/sec",
            "range": "stddev: 0.000026384058694663083",
            "extra": "mean: 91.29985183030716 usec\nrounds: 6911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981421659,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23355.570514796647,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013009801833964768",
            "extra": "mean: 42.81633794243912 usec\nrounds: 1808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16376.96696816104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012759875012501602",
            "extra": "mean: 61.06136758681448 usec\nrounds: 5615"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985593396,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23146.05894331684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013816937514342108",
            "extra": "mean: 43.20389930955129 usec\nrounds: 1738"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16211.26448061919,
            "unit": "iter/sec",
            "range": "stddev: 0.000001212151342756858",
            "extra": "mean: 61.68550276849256 usec\nrounds: 5418"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987190910,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16459.14460837824,
            "unit": "iter/sec",
            "range": "stddev: 0.000016189108372757027",
            "extra": "mean: 60.75649882138878 usec\nrounds: 1273"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10775.633482996289,
            "unit": "iter/sec",
            "range": "stddev: 0.00003182439000622124",
            "extra": "mean: 92.80196858755244 usec\nrounds: 4998"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093647874,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23504.380937690923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014304958093072195",
            "extra": "mean: 42.54526007942757 usec\nrounds: 1761"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16368.450930018382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014457112741212549",
            "extra": "mean: 61.093136074720604 usec\nrounds: 5666"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133400971,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21824.897388538782,
            "unit": "iter/sec",
            "range": "stddev: 0.000005438228956055879",
            "extra": "mean: 45.81923031286021 usec\nrounds: 1854"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15370.690279789063,
            "unit": "iter/sec",
            "range": "stddev: 0.000006967628589353336",
            "extra": "mean: 65.05888686826908 usec\nrounds: 4729"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142169822,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19868.36753598222,
            "unit": "iter/sec",
            "range": "stddev: 0.000013863054799025395",
            "extra": "mean: 50.331261397745415 usec\nrounds: 1645"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13607.136105066085,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606590134485077",
            "extra": "mean: 73.4908501156014 usec\nrounds: 5631"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326561829,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23192.854591333908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014393867742963144",
            "extra": "mean: 43.116727872456615 usec\nrounds: 1819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16198.021695346311,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015899158432487852",
            "extra": "mean: 61.73593410405789 usec\nrounds: 5190"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328499144,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20018.17125669489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017407996729536782",
            "extra": "mean: 49.954613095117736 usec\nrounds: 1680"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14073.282380553526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020890164198907756",
            "extra": "mean: 71.05662864988774 usec\nrounds: 5103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483004100,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15739.15239226598,
            "unit": "iter/sec",
            "range": "stddev: 0.00001451066823485257",
            "extra": "mean: 63.53582296409986 usec\nrounds: 1237"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10864.281374192416,
            "unit": "iter/sec",
            "range": "stddev: 0.000020152932609152122",
            "extra": "mean: 92.04474419959818 usec\nrounds: 5989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595895679,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 24112.17895583569,
            "unit": "iter/sec",
            "range": "stddev: 0.000005506362415801575",
            "extra": "mean: 41.472817609375674 usec\nrounds: 1897"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17290.327259725498,
            "unit": "iter/sec",
            "range": "stddev: 0.00001713467749523671",
            "extra": "mean: 57.83580524408629 usec\nrounds: 5263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608684981013,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20011.65788022806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018374412278112542",
            "extra": "mean: 49.97087227780469 usec\nrounds: 1699"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14055.568433737282,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023749162405398213",
            "extra": "mean: 71.14617987272015 usec\nrounds: 5187"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685769481,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16200.111749015461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000224489625740134",
            "extra": "mean: 61.727969256803036 usec\nrounds: 1789"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11640.783326897437,
            "unit": "iter/sec",
            "range": "stddev: 0.00003659924448300697",
            "extra": "mean: 85.90487185594968 usec\nrounds: 3816"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780588410,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20776.46033324308,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031392750928859232",
            "extra": "mean: 48.131394085447944 usec\nrounds: 1657"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14087.98665618088,
            "unit": "iter/sec",
            "range": "stddev: 0.00001717420970068963",
            "extra": "mean: 70.98246359860555 usec\nrounds: 5041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783674685,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 17132.965957021745,
            "unit": "iter/sec",
            "range": "stddev: 0.000017360026567338254",
            "extra": "mean: 58.36701027180654 usec\nrounds: 1363"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10503.584253143947,
            "unit": "iter/sec",
            "range": "stddev: 0.000051485839205417336",
            "extra": "mean: 95.20559609931996 usec\nrounds: 6306"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609794004440,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 18299.44829591106,
            "unit": "iter/sec",
            "range": "stddev: 0.000027652180481060935",
            "extra": "mean: 54.646456211657814 usec\nrounds: 1473"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12476.469995986046,
            "unit": "iter/sec",
            "range": "stddev: 0.00015074564509765716",
            "extra": "mean: 80.15087603478563 usec\nrounds: 4953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890243279,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23220.375089998506,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416484126750893",
            "extra": "mean: 43.06562646486795 usec\nrounds: 2048"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15322.798370655562,
            "unit": "iter/sec",
            "range": "stddev: 0.000008753173719885268",
            "extra": "mean: 65.26223055411884 usec\nrounds: 5721"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995431091,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16164.079477010946,
            "unit": "iter/sec",
            "range": "stddev: 0.000032042490064967206",
            "extra": "mean: 61.86557059572931 usec\nrounds: 1544"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10919.208634211307,
            "unit": "iter/sec",
            "range": "stddev: 0.000048886120373789305",
            "extra": "mean: 91.58172844750575 usec\nrounds: 4953"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996628815,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23179.211354772124,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012594507504083495",
            "extra": "mean: 43.14210629060598 usec\nrounds: 1844"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15493.820478292979,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014656973592512192",
            "extra": "mean: 64.54186050503242 usec\nrounds: 5821"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035716714,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21954.742562400006,
            "unit": "iter/sec",
            "range": "stddev: 0.000005450667017180329",
            "extra": "mean: 45.54824531227316 usec\nrounds: 1920"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14976.815046656855,
            "unit": "iter/sec",
            "range": "stddev: 0.000006708822028870301",
            "extra": "mean: 66.76987042203083 usec\nrounds: 5734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397746547,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21299.95236071668,
            "unit": "iter/sec",
            "range": "stddev: 0.000013707164783498591",
            "extra": "mean: 46.948461811787496 usec\nrounds: 1689"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13847.834642223424,
            "unit": "iter/sec",
            "range": "stddev: 0.000020830557153223855",
            "extra": "mean: 72.21345617103924 usec\nrounds: 5761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468410242,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23127.112067547438,
            "unit": "iter/sec",
            "range": "stddev: 0.000007594562310048868",
            "extra": "mean: 43.23929408390017 usec\nrounds: 1741"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15388.73384164427,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284238401904949",
            "extra": "mean: 64.98260417590997 usec\nrounds: 6897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479602608,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22730.261417372043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015186462062108914",
            "extra": "mean: 43.99421465675404 usec\nrounds: 1733"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15084.692695809188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016897556795181868",
            "extra": "mean: 66.2923680425932 usec\nrounds: 5426"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482693691,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26198.59360524033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058755995452142016",
            "extra": "mean: 38.16998786530192 usec\nrounds: 1813"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17453.986214186694,
            "unit": "iter/sec",
            "range": "stddev: 0.000008689481450637637",
            "extra": "mean: 57.2935023397231 usec\nrounds: 4915"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646100453,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22988.418328970063,
            "unit": "iter/sec",
            "range": "stddev: 0.000005293749801023513",
            "extra": "mean: 43.500165417635436 usec\nrounds: 1735"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15499.634847956137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016671642736798869",
            "extra": "mean: 64.51764895170194 usec\nrounds: 6868"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655505547,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14988.412759446635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001825515761631242",
            "extra": "mean: 66.71820532629364 usec\nrounds: 1690"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9724.655409294062,
            "unit": "iter/sec",
            "range": "stddev: 0.00004716516316666129",
            "extra": "mean: 102.83140717194756 usec\nrounds: 6135"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734367423,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22820.357625915025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014267241184688002",
            "extra": "mean: 43.82052272767146 usec\nrounds: 1672"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15354.974780064384,
            "unit": "iter/sec",
            "range": "stddev: 0.000001613280276447146",
            "extra": "mean: 65.12547329601064 usec\nrounds: 5018"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009423235,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20736.999353260984,
            "unit": "iter/sec",
            "range": "stddev: 0.00001050982802868622",
            "extra": "mean: 48.222984577696174 usec\nrounds: 1621"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12711.73855611995,
            "unit": "iter/sec",
            "range": "stddev: 0.000029800162525875068",
            "extra": "mean: 78.66744549419319 usec\nrounds: 5504"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016543125,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20324.921948758813,
            "unit": "iter/sec",
            "range": "stddev: 0.000003178274486503591",
            "extra": "mean: 49.20068094338081 usec\nrounds: 1611"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13753.54508756491,
            "unit": "iter/sec",
            "range": "stddev: 0.000005199983198235364",
            "extra": "mean: 72.70852668408651 usec\nrounds: 5003"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017771162,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20492.870645136318,
            "unit": "iter/sec",
            "range": "stddev: 0.00002037859505521101",
            "extra": "mean: 48.797458263239236 usec\nrounds: 1713"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13322.559835395235,
            "unit": "iter/sec",
            "range": "stddev: 0.000029604962917978063",
            "extra": "mean: 75.06064993179544 usec\nrounds: 5239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029686091,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25791.201163709527,
            "unit": "iter/sec",
            "range": "stddev: 0.000002835057021366581",
            "extra": "mean: 38.7729130431927 usec\nrounds: 1840"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17440.567495324478,
            "unit": "iter/sec",
            "range": "stddev: 0.000003937642916181396",
            "extra": "mean: 57.33758378378933 usec\nrounds: 5550"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033085346,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16418.73020155202,
            "unit": "iter/sec",
            "range": "stddev: 0.000020394339625564283",
            "extra": "mean: 60.90604984211705 usec\nrounds: 1585"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10530.575408998066,
            "unit": "iter/sec",
            "range": "stddev: 0.000041811427649562874",
            "extra": "mean: 94.9615724840192 usec\nrounds: 6091"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074314155,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19162.923930784593,
            "unit": "iter/sec",
            "range": "stddev: 0.000008475079777381749",
            "extra": "mean: 52.18410319907046 usec\nrounds: 1434"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 11946.78297262212,
            "unit": "iter/sec",
            "range": "stddev: 0.00002130463793633479",
            "extra": "mean: 83.70454224301662 usec\nrounds: 7008"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099108932,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20046.41186155838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017563688715806664",
            "extra": "mean: 49.884238980324994 usec\nrounds: 1724"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13478.450821481256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028642375653971757",
            "extra": "mean: 74.1925027768215 usec\nrounds: 2880"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163535620,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23210.869239771564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013441944588567139",
            "extra": "mean: 43.08326369296464 usec\nrounds: 1771"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15519.729642958402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014087357605325631",
            "extra": "mean: 64.43411212731526 usec\nrounds: 2952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185033243,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25626.436876163363,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062067769251397575",
            "extra": "mean: 39.022202143527736 usec\nrounds: 2053"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16008.440007762723,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048862739028526",
            "extra": "mean: 62.46704860155553 usec\nrounds: 3004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186823433,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26072.440748166475,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012871226404540818",
            "extra": "mean: 38.35467533166507 usec\nrounds: 1885"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17358.086345356183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014960705352215026",
            "extra": "mean: 57.61003719557661 usec\nrounds: 3038"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249201958,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22899.622144589743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015355521297982403",
            "extra": "mean: 43.66884281696585 usec\nrounds: 1775"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15516.037701361847,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016160830085787917",
            "extra": "mean: 64.44944381078874 usec\nrounds: 2981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251414737,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21037.262634259416,
            "unit": "iter/sec",
            "range": "stddev: 0.000004959378949019469",
            "extra": "mean: 47.53470151442084 usec\nrounds: 2047"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13568.3018293456,
            "unit": "iter/sec",
            "range": "stddev: 0.000004717478615219375",
            "extra": "mean: 73.70119065579705 usec\nrounds: 2654"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252291570,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15327.983321011008,
            "unit": "iter/sec",
            "range": "stddev: 0.000142243281633642",
            "extra": "mean: 65.24015449763952 usec\nrounds: 1534"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10270.280547958871,
            "unit": "iter/sec",
            "range": "stddev: 0.00005971401830394149",
            "extra": "mean: 97.36832361397774 usec\nrounds: 2880"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261931094,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25695.774235973102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019804784505726153",
            "extra": "mean: 38.91690481153272 usec\nrounds: 1912"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17104.149424731175,
            "unit": "iter/sec",
            "range": "stddev: 0.000007543791022437733",
            "extra": "mean: 58.465345172562834 usec\nrounds: 2900"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617632894,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20718.566091387725,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020261826062333165",
            "extra": "mean: 48.26588845912841 usec\nrounds: 1551"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13666.497878799299,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018729173582214203",
            "extra": "mean: 73.1716354012896 usec\nrounds: 4819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677422376,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23116.607738447176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013662087969848267",
            "extra": "mean: 43.258942285758295 usec\nrounds: 1750"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15477.450310637716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015258333627931207",
            "extra": "mean: 64.61012504835476 usec\nrounds: 5166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700864030,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23097.264219317596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013192945230482431",
            "extra": "mean: 43.29517082649301 usec\nrounds: 1803"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15215.145906764768,
            "unit": "iter/sec",
            "range": "stddev: 0.000001472262883786368",
            "extra": "mean: 65.72398359685742 usec\nrounds: 5121"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702158812,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20274.543783949444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023657110616763904",
            "extra": "mean: 49.322934743008155 usec\nrounds: 1655"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13637.658612848825,
            "unit": "iter/sec",
            "range": "stddev: 0.000004340314170622957",
            "extra": "mean: 73.3263698988507 usec\nrounds: 4558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705496540,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 25244.051062868963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069123252130604195",
            "extra": "mean: 39.61329334620475 usec\nrounds: 2059"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 17429.591465239882,
            "unit": "iter/sec",
            "range": "stddev: 0.000009358573336851301",
            "extra": "mean: 57.373691287848956 usec\nrounds: 5808"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765281429,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16186.81762167403,
            "unit": "iter/sec",
            "range": "stddev: 0.000015781507125410296",
            "extra": "mean: 61.77866603383529 usec\nrounds: 1581"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10837.304561166027,
            "unit": "iter/sec",
            "range": "stddev: 0.00003923478796259859",
            "extra": "mean: 92.27386702624939 usec\nrounds: 6490"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854634427,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23057.821739602157,
            "unit": "iter/sec",
            "range": "stddev: 0.000001403467374914718",
            "extra": "mean: 43.369231113556786 usec\nrounds: 1787"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15355.58693837453,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013318976998612308",
            "extra": "mean: 65.12287703578039 usec\nrounds: 4912"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949759800,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 15755.821525188561,
            "unit": "iter/sec",
            "range": "stddev: 0.000020104310771038592",
            "extra": "mean: 63.468604185527056 usec\nrounds: 1099"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10252.58666237078,
            "unit": "iter/sec",
            "range": "stddev: 0.000027429329163637154",
            "extra": "mean: 97.53636159645615 usec\nrounds: 6239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962568106,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23146.604373858936,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018087471271145636",
            "extra": "mean: 43.20288124548278 usec\nrounds: 1381"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15489.012182228817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016664401599735796",
            "extra": "mean: 64.56189640985248 usec\nrounds: 5348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048975017,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20497.789796586996,
            "unit": "iter/sec",
            "range": "stddev: 0.000003373185158648212",
            "extra": "mean: 48.78574763053263 usec\nrounds: 1688"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13481.031748920319,
            "unit": "iter/sec",
            "range": "stddev: 0.00000412806044091081",
            "extra": "mean: 74.17829871071173 usec\nrounds: 5584"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116185427,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20717.307407743865,
            "unit": "iter/sec",
            "range": "stddev: 0.000003684846048345476",
            "extra": "mean: 48.26882086164405 usec\nrounds: 1323"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13932.750904347347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000049169834288154896",
            "extra": "mean: 71.77333513426817 usec\nrounds: 5738"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285742001,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 21114.597995921584,
            "unit": "iter/sec",
            "range": "stddev: 0.000005336115772995762",
            "extra": "mean: 47.36059858649244 usec\nrounds: 1415"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14213.164306958473,
            "unit": "iter/sec",
            "range": "stddev: 0.000007550330455302978",
            "extra": "mean: 70.35730949162536 usec\nrounds: 5900"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd63eb6e52c6f66c9170a2928d2b4dc8918a41de",
          "message": "Fix Benchmarks grouping name (#1473)",
          "timestamp": "2020-12-14T08:12:51-08:00",
          "tree_id": "c15c183e1c9a247e2c44d39f1f17bc4ce2f1e062",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd63eb6e52c6f66c9170a2928d2b4dc8918a41de"
        },
        "date": 1607962565018,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 159803.37306578047,
            "unit": "iter/sec",
            "range": "stddev: 0.00002821099881733595",
            "extra": "mean: 6.257690190233758 usec\nrounds: 117648"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 92765.47483223924,
            "unit": "iter/sec",
            "range": "stddev: 0.00004711271823996293",
            "extra": "mean: 10.779872596010957 usec\nrounds: 156251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d6e95057c3a44faaea8562e2875e6d52f3fdab",
          "message": "Do not try to comment on PR after benchmarks (#1478)",
          "timestamp": "2020-12-14T13:28:12-08:00",
          "tree_id": "dfe9ff194aba91d6064941b7f51b5d80926e69ed",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/47d6e95057c3a44faaea8562e2875e6d52f3fdab"
        },
        "date": 1607981429594,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 272240.72465309873,
            "unit": "iter/sec",
            "range": "stddev: 0.000010490081868077968",
            "extra": "mean: 3.6732197259401387 usec\nrounds: 175439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193623.0184566152,
            "unit": "iter/sec",
            "range": "stddev: 0.000006629451560943492",
            "extra": "mean: 5.164675191881012 usec\nrounds: 121952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0",
          "message": "Remove unnecessary contrib pkgs from docs install (#1470)",
          "timestamp": "2020-12-14T14:37:44-08:00",
          "tree_id": "dc2d85da6f535236dd40bdaaed0b24e77784583a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33fa7b99274d1a7d7d7cb52fb273b18cbb5107a0"
        },
        "date": 1607985609500,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 236089.06142328822,
            "unit": "iter/sec",
            "range": "stddev: 0.000011321937679810987",
            "extra": "mean: 4.235689675630852 usec\nrounds: 175439"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 173842.7135623381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073256645649815",
            "extra": "mean: 5.752326223563065 usec\nrounds: 120468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "001163739d7cc09a26592b688f9880da02baf208",
          "message": "Remove SDK dependency from auto-instrumentation (#1420)",
          "timestamp": "2020-12-14T15:03:25-08:00",
          "tree_id": "3a2c11fff71c03c32ec35d12b2a7e3336dd0c7f9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/001163739d7cc09a26592b688f9880da02baf208"
        },
        "date": 1607987235557,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 198918.9842859771,
            "unit": "iter/sec",
            "range": "stddev: 0.000015998707410005674",
            "extra": "mean: 5.027172261056511 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 117814.91238373138,
            "unit": "iter/sec",
            "range": "stddev: 0.000016549656454160508",
            "extra": "mean: 8.487889858483538 usec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob.knox.dev@gmail.com",
            "name": "Rob Knox",
            "username": "robwknox"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cfe5559ce6c015eea04f66fb9a4ece596f775b3",
          "message": "Adding support for array attributes to Zipkin exporter (#1285)",
          "timestamp": "2020-12-15T20:38:24-08:00",
          "tree_id": "e9a7b62d8a75ebd757b49b580a4debc56e5f8bd2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9cfe5559ce6c015eea04f66fb9a4ece596f775b3"
        },
        "date": 1608093644421,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 278649.7689361246,
            "unit": "iter/sec",
            "range": "stddev: 0.000018019320922050986",
            "extra": "mean: 3.58873435932847 usec\nrounds: 40481"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193867.39911388492,
            "unit": "iter/sec",
            "range": "stddev: 0.000006282175568374536",
            "extra": "mean: 5.158164831068698 usec\nrounds: 140826"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mails@violalyu.com",
            "name": "Wanqi Lyu",
            "username": "violalyu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8c3c24c347981e8c9ff9e41485f9579a80bc5bb",
          "message": "Update usage for `Meter.create_counter` in tests and examples, clean up unused imports (#1463)",
          "timestamp": "2020-12-16T07:40:44-08:00",
          "tree_id": "7f21ab26c1f7d98c001a91817984a6f0cee49c0d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d8c3c24c347981e8c9ff9e41485f9579a80bc5bb"
        },
        "date": 1608133403967,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 203398.64073869822,
            "unit": "iter/sec",
            "range": "stddev: 0.000058738955118344047",
            "extra": "mean: 4.916453700812475 usec\nrounds: 131579"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 156086.53794928538,
            "unit": "iter/sec",
            "range": "stddev: 0.000009646075417456941",
            "extra": "mean: 6.406702417378964 usec\nrounds: 98040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "55284676+dmarar@users.noreply.github.com",
            "name": "Dilip M",
            "username": "dmarar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d0834d38f8a8eb1e9849d4924357f3d6e569471",
          "message": "Auto-instrumentation should exclude packages mentioned in OTEL_PYTHON_DISABLED_INSTRUMENTATIONS env variable (#1461)",
          "timestamp": "2020-12-16T10:05:26-08:00",
          "tree_id": "5fcf72add1ef9ed1bd2125ec45e2d929870f36f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9d0834d38f8a8eb1e9849d4924357f3d6e569471"
        },
        "date": 1608142120527,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 217212.3477532018,
            "unit": "iter/sec",
            "range": "stddev: 0.000058311708589330635",
            "extra": "mean: 4.603789841340912 usec\nrounds: 135136"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 157612.2517214783,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368816825040856",
            "extra": "mean: 6.3446844333341055 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cc23e00af15fe4b795350c21e08f8a266381db1",
          "message": "Use uppercase if testing in windows (#1484)\n\nFixes #1419",
          "timestamp": "2020-12-18T13:20:15-08:00",
          "tree_id": "fd381629b1cce5b1f9638e1676b6513e0b33cd3d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1cc23e00af15fe4b795350c21e08f8a266381db1"
        },
        "date": 1608326651152,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 218736.31215168812,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519536839498765",
            "extra": "mean: 4.571714637423919 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 149441.76960549067,
            "unit": "iter/sec",
            "range": "stddev: 0.000010891801531934093",
            "extra": "mean: 6.691569583523312 usec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "753ec6c272273c5d941d43ce836e304e23c75ad0",
          "message": "Add some repr()s to basic trace types. (#1485)",
          "timestamp": "2020-12-18T13:52:08-08:00",
          "tree_id": "c25d2fbcc857820fbbb75daab2da9e013843299e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/753ec6c272273c5d941d43ce836e304e23c75ad0"
        },
        "date": 1608328496929,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 218028.12366228658,
            "unit": "iter/sec",
            "range": "stddev: 0.000013616196269853297",
            "extra": "mean: 4.586564261539691 usec\nrounds: 138870"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 154527.33038314295,
            "unit": "iter/sec",
            "range": "stddev: 0.00007809631440750523",
            "extra": "mean: 6.471347156005018 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f2b5ceefa87f443bf574eac7debe2b0e996e59d",
          "message": "Deleting unused file (#1492)",
          "timestamp": "2020-12-20T08:47:13-08:00",
          "tree_id": "87105ad8d7516d10a729ab4afa1ab5d7ce66a2d7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6f2b5ceefa87f443bf574eac7debe2b0e996e59d"
        },
        "date": 1608483000235,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 222415.45358911777,
            "unit": "iter/sec",
            "range": "stddev: 0.000008662398921463394",
            "extra": "mean: 4.496090464322518 usec\nrounds: 138889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 145512.41770498606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000699046269380316",
            "extra": "mean: 6.8722657198055375 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbe9d386fcd7b7e8ade2f803766b56deab628738",
          "message": "Set max number of commits in performance graph (#1498)",
          "timestamp": "2020-12-21T16:09:05-08:00",
          "tree_id": "321c4e7dbfbad67811c432512a668160d87011e0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/dbe9d386fcd7b7e8ade2f803766b56deab628738"
        },
        "date": 1608595949944,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 189176.80028530816,
            "unit": "iter/sec",
            "range": "stddev: 0.000013867551254734151",
            "extra": "mean: 5.286060439186221 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 117503.27708772525,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537008062940181",
            "extra": "mean: 8.510400941868395 usec\nrounds: 102041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "41953604180695852223805efe1e1b0d7372de3d",
          "message": "Update zipkin exporter status code and error tag (#1486)",
          "timestamp": "2020-12-22T16:53:43-08:00",
          "tree_id": "39ccf249260893b50c21a64f5f43c013772c2ce7",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/41953604180695852223805efe1e1b0d7372de3d"
        },
        "date": 1608685000507,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 222783.3385386127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010289405148101546",
            "extra": "mean: 4.48866601317531 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 146467.674409388,
            "unit": "iter/sec",
            "range": "stddev: 0.000010202829397651536",
            "extra": "mean: 6.827445059344124 usec\nrounds: 116280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685759859,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 261145.90346450717,
            "unit": "iter/sec",
            "range": "stddev: 0.00004822360609422287",
            "extra": "mean: 3.829276993180603 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 199821.18154511813,
            "unit": "iter/sec",
            "range": "stddev: 0.000006311621756920688",
            "extra": "mean: 5.004474461953912 usec\nrounds: 117648"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780605483,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 242761.96147190718,
            "unit": "iter/sec",
            "range": "stddev: 0.00004606352949167964",
            "extra": "mean: 4.119261493591621 usec\nrounds: 181819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 179282.90783214621,
            "unit": "iter/sec",
            "range": "stddev: 0.000009462084171083779",
            "extra": "mean: 5.577776554897531 usec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783729941,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 173766.54307008933,
            "unit": "iter/sec",
            "range": "stddev: 0.000012726353465805754",
            "extra": "mean: 5.754847753382805 usec\nrounds: 135136"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 96403.2905876247,
            "unit": "iter/sec",
            "range": "stddev: 0.000015285922460892652",
            "extra": "mean: 10.373089900816831 usec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609794040174,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 195212.8380111958,
            "unit": "iter/sec",
            "range": "stddev: 0.00006281298013558067",
            "extra": "mean: 5.122613913039102 usec\nrounds: 129871"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 135921.33457421107,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038134938370303",
            "extra": "mean: 7.357196742752804 usec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890276811,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 236936.40760997668,
            "unit": "iter/sec",
            "range": "stddev: 0.00004988281677048068",
            "extra": "mean: 4.220541748257236 usec\nrounds: 163935"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 158883.5650661257,
            "unit": "iter/sec",
            "range": "stddev: 0.000008024384284661753",
            "extra": "mean: 6.2939171813259 usec\nrounds: 106383"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995453409,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 217383.50494849036,
            "unit": "iter/sec",
            "range": "stddev: 0.000014703463222434638",
            "extra": "mean: 4.6001650412111665 usec\nrounds: 136987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 149822.96860432634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000732294830724842",
            "extra": "mean: 6.674544025628949 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996678016,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 224639.6408749478,
            "unit": "iter/sec",
            "range": "stddev: 0.000012315613638798635",
            "extra": "mean: 4.451574068161368 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 138876.07556726158,
            "unit": "iter/sec",
            "range": "stddev: 0.00000902163963699282",
            "extra": "mean: 7.2006643038791225 usec\nrounds: 101011"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035737223,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 263827.10836144496,
            "unit": "iter/sec",
            "range": "stddev: 0.000012492953317618728",
            "extra": "mean: 3.790361067180379 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 174440.2669001316,
            "unit": "iter/sec",
            "range": "stddev: 0.000010656481211604778",
            "extra": "mean: 5.732621359565495 usec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397769658,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 246574.8311973669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004877701224266775",
            "extra": "mean: 4.055563964675558 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 176005.87324041262,
            "unit": "iter/sec",
            "range": "stddev: 0.000007840773767097148",
            "extra": "mean: 5.681628581985243 usec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468530346,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 169630.98685868012,
            "unit": "iter/sec",
            "range": "stddev: 0.00002035715380301144",
            "extra": "mean: 5.895149338682454 usec\nrounds: 138889"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 82544.42803908065,
            "unit": "iter/sec",
            "range": "stddev: 0.000029093430826916806",
            "extra": "mean: 12.114688098953815 usec\nrounds: 151516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479639458,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 286295.23330666375,
            "unit": "iter/sec",
            "range": "stddev: 0.000010484998852994955",
            "extra": "mean: 3.4928978329473437 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 193634.68700894757,
            "unit": "iter/sec",
            "range": "stddev: 0.000005841147764622106",
            "extra": "mean: 5.164363965190759 usec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482753526,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 281813.92065484263,
            "unit": "iter/sec",
            "range": "stddev: 0.000011225665303716403",
            "extra": "mean: 3.54844075011032 usec\nrounds: 166667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 189512.9923382162,
            "unit": "iter/sec",
            "range": "stddev: 0.000005944668557093236",
            "extra": "mean: 5.276683079413048 usec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646147792,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 276136.46589480835,
            "unit": "iter/sec",
            "range": "stddev: 0.00004690420046516033",
            "extra": "mean: 3.6213978358835837 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 191668.91241522846,
            "unit": "iter/sec",
            "range": "stddev: 0.000005420713018918922",
            "extra": "mean: 5.217330173156177 usec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655511180,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 256503.58400130173,
            "unit": "iter/sec",
            "range": "stddev: 0.00005084379021354985",
            "extra": "mean: 3.8985810038230304 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 179458.79503624974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006492897043409361",
            "extra": "mean: 5.572309787313602 usec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734420877,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 254221.13494824132,
            "unit": "iter/sec",
            "range": "stddev: 0.00001993918678980645",
            "extra": "mean: 3.933583256968806 usec\nrounds: 40160"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 174513.28609517368,
            "unit": "iter/sec",
            "range": "stddev: 0.000006263263702593743",
            "extra": "mean: 5.730222737623733 usec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009466645,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 230768.98805972084,
            "unit": "iter/sec",
            "range": "stddev: 0.00005202944350058624",
            "extra": "mean: 4.333337890883369 usec\nrounds: 153847"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 154096.40255963578,
            "unit": "iter/sec",
            "range": "stddev: 0.000008050957045351769",
            "extra": "mean: 6.489444162156848 usec\nrounds: 99010"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016567637,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 276583.54406528093,
            "unit": "iter/sec",
            "range": "stddev: 0.000019378044417266695",
            "extra": "mean: 3.6155440967376125 usec\nrounds: 40486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 185756.1699076634,
            "unit": "iter/sec",
            "range": "stddev: 0.000011696542902245411",
            "extra": "mean: 5.383401264663698 usec\nrounds: 131579"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017802303,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 256383.96789458202,
            "unit": "iter/sec",
            "range": "stddev: 0.000041647581939887476",
            "extra": "mean: 3.900399889322145 usec\nrounds: 181819"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 119100.2612491731,
            "unit": "iter/sec",
            "range": "stddev: 0.00001302415960305949",
            "extra": "mean: 8.396287208034508 usec\nrounds: 102041"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029732856,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 219885.6372370572,
            "unit": "iter/sec",
            "range": "stddev: 0.000053908449367862676",
            "extra": "mean: 4.547818641387235 usec\nrounds: 149254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 165082.39009349814,
            "unit": "iter/sec",
            "range": "stddev: 0.000006577692004662803",
            "extra": "mean: 6.057581304908582 usec\nrounds: 99010"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033100237,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 237858.92708072482,
            "unit": "iter/sec",
            "range": "stddev: 0.00005162291014494423",
            "extra": "mean: 4.204172667694826 usec\nrounds: 156251"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 168194.93122423848,
            "unit": "iter/sec",
            "range": "stddev: 0.000006643514995514271",
            "extra": "mean: 5.945482380005816 usec\nrounds: 103093"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074374646,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 234636.72498358376,
            "unit": "iter/sec",
            "range": "stddev: 0.000012451718287049451",
            "extra": "mean: 4.261907423358234 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 151755.83691179185,
            "unit": "iter/sec",
            "range": "stddev: 0.000010863193218779022",
            "extra": "mean: 6.589532372196336 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099112272,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 251651.89504301854,
            "unit": "iter/sec",
            "range": "stddev: 0.000046017905993045116",
            "extra": "mean: 3.973743173398537 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 183516.89423471855,
            "unit": "iter/sec",
            "range": "stddev: 0.000006470595010989602",
            "extra": "mean: 5.449089601096876 usec\nrounds: 113637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163603324,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 220595.14850458337,
            "unit": "iter/sec",
            "range": "stddev: 0.000014464801199805979",
            "extra": "mean: 4.533191263629367 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 132942.3858812743,
            "unit": "iter/sec",
            "range": "stddev: 0.00007349978852213461",
            "extra": "mean: 7.522055463131685 usec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185099350,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 259562.24610313497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460405008757722",
            "extra": "mean: 3.852640416752512 usec\nrounds: 178572"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 174319.12671120468,
            "unit": "iter/sec",
            "range": "stddev: 0.000006039104025121135",
            "extra": "mean: 5.736605149799224 usec\nrounds: 112373"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186857649,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 233326.19585286622,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943327409235819",
            "extra": "mean: 4.2858453863045565 usec\nrounds: 166667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 167407.14570612556,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075567106579653796",
            "extra": "mean: 5.973460665504968 usec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249240958,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 250802.40985763582,
            "unit": "iter/sec",
            "range": "stddev: 0.00004484349655193511",
            "extra": "mean: 3.9872025175820074 usec\nrounds: 166667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 146075.4050444165,
            "unit": "iter/sec",
            "range": "stddev: 0.000015730393899704734",
            "extra": "mean: 6.845779408901413 usec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251418426,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 254135.49810179058,
            "unit": "iter/sec",
            "range": "stddev: 0.000011421899629742974",
            "extra": "mean: 3.9349087690199944 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 174360.05584308712,
            "unit": "iter/sec",
            "range": "stddev: 0.00000732586067603583",
            "extra": "mean: 5.735258543963395 usec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252320968,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 178001.87294489128,
            "unit": "iter/sec",
            "range": "stddev: 0.000015150709194819116",
            "extra": "mean: 5.617918415440473 usec\nrounds: 135136"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 116064.17678118193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000242660914109361",
            "extra": "mean: 8.615922912074065 usec\nrounds: 172414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261973730,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 271342.04176439304,
            "unit": "iter/sec",
            "range": "stddev: 0.000011091199883856882",
            "extra": "mean: 3.685385403225876 usec\nrounds: 166667"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 185364.52542338055,
            "unit": "iter/sec",
            "range": "stddev: 0.000006027190831208824",
            "extra": "mean: 5.394775498256514 usec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617628486,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 272164.97056919127,
            "unit": "iter/sec",
            "range": "stddev: 0.000018348808429578876",
            "extra": "mean: 3.6742421256807596 usec\nrounds: 40486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 179417.96478432414,
            "unit": "iter/sec",
            "range": "stddev: 0.000005883550761921167",
            "extra": "mean: 5.573577881134066 usec\nrounds: 129871"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677453102,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 227691.70243818432,
            "unit": "iter/sec",
            "range": "stddev: 0.000015827497976801413",
            "extra": "mean: 4.391903566496845 usec\nrounds: 151493"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 160487.57702847707,
            "unit": "iter/sec",
            "range": "stddev: 0.000006737007859481971",
            "extra": "mean: 6.231011885876743 usec\nrounds: 95239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700875745,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 285238.9007027495,
            "unit": "iter/sec",
            "range": "stddev: 0.000009967472598792428",
            "extra": "mean: 3.5058331719000373 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 195097.3425535349,
            "unit": "iter/sec",
            "range": "stddev: 0.000006112360036577487",
            "extra": "mean: 5.125646443521387 usec\nrounds: 113624"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702130768,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 276849.86883346166,
            "unit": "iter/sec",
            "range": "stddev: 0.000045340303649042836",
            "extra": "mean: 3.612066006076194 usec\nrounds: 169492"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 194233.65703546675,
            "unit": "iter/sec",
            "range": "stddev: 0.000005353193763797502",
            "extra": "mean: 5.148438304991609 usec\nrounds: 108696"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705550395,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 294172.5512800101,
            "unit": "iter/sec",
            "range": "stddev: 0.000010646255899921952",
            "extra": "mean: 3.3993654256618373 usec\nrounds: 172414"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 200887.663692421,
            "unit": "iter/sec",
            "range": "stddev: 0.000005363032675249465",
            "extra": "mean: 4.977906465830075 usec\nrounds: 112360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765309047,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 192760.58026325214,
            "unit": "iter/sec",
            "range": "stddev: 0.00005377416408545299",
            "extra": "mean: 5.18778268167851 usec\nrounds: 161291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 103914.3107240573,
            "unit": "iter/sec",
            "range": "stddev: 0.000023960539866469872",
            "extra": "mean: 9.623313603604446 usec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854708341,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 248279.5661583351,
            "unit": "iter/sec",
            "range": "stddev: 0.00003819867958803392",
            "extra": "mean: 4.027717687255305 usec\nrounds: 161291"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 131170.91310853997,
            "unit": "iter/sec",
            "range": "stddev: 0.00002133393435951786",
            "extra": "mean: 7.623641372173189 usec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949898465,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 247143.94219154766,
            "unit": "iter/sec",
            "range": "stddev: 0.000010466962422856572",
            "extra": "mean: 4.04622501013986 usec\nrounds: 142858"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 166246.9834491985,
            "unit": "iter/sec",
            "range": "stddev: 0.00001380884371238514",
            "extra": "mean: 6.0151467368163 usec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962639206,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 266400.49463193945,
            "unit": "iter/sec",
            "range": "stddev: 0.000018676264645973696",
            "extra": "mean: 3.753746784072624 usec\nrounds: 40486"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 178792.83199504076,
            "unit": "iter/sec",
            "range": "stddev: 0.000006100906608916135",
            "extra": "mean: 5.5930653865795765 usec\nrounds: 131579"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612049008210,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 231222.2077866619,
            "unit": "iter/sec",
            "range": "stddev: 0.00005235563496466732",
            "extra": "mean: 4.324844095090788 usec\nrounds: 153847"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 159499.04187777956,
            "unit": "iter/sec",
            "range": "stddev: 0.000007144713779369595",
            "extra": "mean: 6.269630138382129 usec\nrounds: 99010"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116254636,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 248585.0336945029,
            "unit": "iter/sec",
            "range": "stddev: 0.000020715796738737283",
            "extra": "mean: 4.022768326547506 usec\nrounds: 40485"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 165171.60111223135,
            "unit": "iter/sec",
            "range": "stddev: 0.000008012308902009539",
            "extra": "mean: 6.054309537875804 usec\nrounds: 129871"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285882293,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 159730.67015665816,
            "unit": "iter/sec",
            "range": "stddev: 0.000019464201277019573",
            "extra": "mean: 6.260538436477075 usec\nrounds: 114943"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 76994.10860231447,
            "unit": "iter/sec",
            "range": "stddev: 0.00003149604962665921",
            "extra": "mean: 12.988006720944613 usec\nrounds: 153847"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685713152,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2966.450324234082,
            "unit": "iter/sec",
            "range": "stddev: 0.000021193907265385302",
            "extra": "mean: 337.10323474174254 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4207.130364469713,
            "unit": "iter/sec",
            "range": "stddev: 0.0008315660467585326",
            "extra": "mean: 237.69170749859686 usec\nrounds: 5641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780519722,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3479.8656594885283,
            "unit": "iter/sec",
            "range": "stddev: 0.000021485960068571018",
            "extra": "mean: 287.3674152544671 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4824.16470882576,
            "unit": "iter/sec",
            "range": "stddev: 0.0007985699233464789",
            "extra": "mean: 207.28977146458337 usec\nrounds: 6371"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783625902,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2470.2695713023913,
            "unit": "iter/sec",
            "range": "stddev: 0.00013808752665729046",
            "extra": "mean: 404.8141189193265 usec\nrounds: 185"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3607.544889084592,
            "unit": "iter/sec",
            "range": "stddev: 0.0008894515071201359",
            "extra": "mean: 277.1968279662206 usec\nrounds: 5900"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793947738,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2564.7155405148033,
            "unit": "iter/sec",
            "range": "stddev: 0.00008185742028384723",
            "extra": "mean: 389.90678857089733 usec\nrounds: 175"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4058.986758410468,
            "unit": "iter/sec",
            "range": "stddev: 0.0007888717197818262",
            "extra": "mean: 246.36690374215655 usec\nrounds: 4062"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890213459,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3031.796922062636,
            "unit": "iter/sec",
            "range": "stddev: 0.00001654628198314143",
            "extra": "mean: 329.8373953489159 usec\nrounds: 215"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4335.22285162644,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004550626324823",
            "extra": "mean: 230.66864939246 usec\nrounds: 5596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995387528,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2980.2016104936115,
            "unit": "iter/sec",
            "range": "stddev: 0.000010858944752328471",
            "extra": "mean: 335.5477684727409 usec\nrounds: 203"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4141.25959557735,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397253610388925",
            "extra": "mean: 241.47242570061243 usec\nrounds: 5673"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996586140,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3463.0568731916983,
            "unit": "iter/sec",
            "range": "stddev: 0.000009264701808458027",
            "extra": "mean: 288.76222268863813 usec\nrounds: 238"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4766.503163135299,
            "unit": "iter/sec",
            "range": "stddev: 0.0008040925139574803",
            "extra": "mean: 209.79740614337965 usec\nrounds: 6739"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035699109,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1879.80611792938,
            "unit": "iter/sec",
            "range": "stddev: 0.00014587207383030205",
            "extra": "mean: 531.9697549987268 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3277.470605530119,
            "unit": "iter/sec",
            "range": "stddev: 0.0010012787912469666",
            "extra": "mean: 305.113339022076 usec\nrounds: 5625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397689092,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3488.8210305743055,
            "unit": "iter/sec",
            "range": "stddev: 0.00000744574334704932",
            "extra": "mean: 286.62977872367014 usec\nrounds: 235"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4711.810415839794,
            "unit": "iter/sec",
            "range": "stddev: 0.0008202542839626538",
            "extra": "mean: 212.2326476970038 usec\nrounds: 5992"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468392215,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2212.378686804029,
            "unit": "iter/sec",
            "range": "stddev: 0.00014398207032249803",
            "extra": "mean: 452.0021847817499 usec\nrounds: 184"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3399.5952686817673,
            "unit": "iter/sec",
            "range": "stddev: 0.0009716014464490108",
            "extra": "mean: 294.15266258673245 usec\nrounds: 5311"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479563525,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3504.408560813214,
            "unit": "iter/sec",
            "range": "stddev: 0.000007950555004742693",
            "extra": "mean: 285.35485593264997 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4728.75733429496,
            "unit": "iter/sec",
            "range": "stddev: 0.0008383824460918492",
            "extra": "mean: 211.472048427517 usec\nrounds: 5596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482681416,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3147.5762041584476,
            "unit": "iter/sec",
            "range": "stddev: 0.000013140416647588089",
            "extra": "mean: 317.70477826044095 usec\nrounds: 230"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4539.576635302848,
            "unit": "iter/sec",
            "range": "stddev: 0.0008265070269730791",
            "extra": "mean: 220.28485921425295 usec\nrounds: 5931"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646060663,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3954.5659768962455,
            "unit": "iter/sec",
            "range": "stddev: 0.000006689517117017981",
            "extra": "mean: 252.87225092267983 usec\nrounds: 271"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4764.256226825374,
            "unit": "iter/sec",
            "range": "stddev: 0.000807894551122",
            "extra": "mean: 209.89635157938227 usec\nrounds: 6869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655443781,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2856.649973814874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003548310798633106",
            "extra": "mean: 350.06038862526924 usec\nrounds: 211"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3988.400006794617,
            "unit": "iter/sec",
            "range": "stddev: 0.0009423248365133188",
            "extra": "mean: 250.72710818784606 usec\nrounds: 5777"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734329844,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3311.8223845804187,
            "unit": "iter/sec",
            "range": "stddev: 0.000025686125954903338",
            "extra": "mean: 301.9485600000533 usec\nrounds: 225"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4701.598814960183,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879273965247918",
            "extra": "mean: 212.6936047410223 usec\nrounds: 5695"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009373561,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2961.312982315865,
            "unit": "iter/sec",
            "range": "stddev: 0.00006127130879489829",
            "extra": "mean: 337.68804782598835 usec\nrounds: 230"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4415.98402776692,
            "unit": "iter/sec",
            "range": "stddev: 0.0008067335926267956",
            "extra": "mean: 226.45009440980274 usec\nrounds: 7531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016490097,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3530.1205750652693,
            "unit": "iter/sec",
            "range": "stddev: 0.000007594197772026422",
            "extra": "mean: 283.27644303807125 usec\nrounds: 237"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4846.574463194382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008048492184597751",
            "extra": "mean: 206.3312980320742 usec\nrounds: 5996"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017722577,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3431.9504533453196,
            "unit": "iter/sec",
            "range": "stddev: 0.000008237520841861035",
            "extra": "mean: 291.37949792522284 usec\nrounds: 241"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4958.333670455966,
            "unit": "iter/sec",
            "range": "stddev: 0.000767850104649632",
            "extra": "mean: 201.68065855641387 usec\nrounds: 6370"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029682886,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2368.2909883915036,
            "unit": "iter/sec",
            "range": "stddev: 0.000083477002837807",
            "extra": "mean: 422.2454102564399 usec\nrounds: 195"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3484.5090065712407,
            "unit": "iter/sec",
            "range": "stddev: 0.0009422252078129888",
            "extra": "mean: 286.98447847721326 usec\nrounds: 5831"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033017851,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3476.8809098185957,
            "unit": "iter/sec",
            "range": "stddev: 0.000007355891474751467",
            "extra": "mean: 287.61410756866405 usec\nrounds: 251"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4743.927121232738,
            "unit": "iter/sec",
            "range": "stddev: 0.0007864265092643616",
            "extra": "mean: 210.79581841049531 usec\nrounds: 6757"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074264977,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2400.9237458392304,
            "unit": "iter/sec",
            "range": "stddev: 0.00007302919154757664",
            "extra": "mean: 416.50635582782957 usec\nrounds: 163"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3699.3424268389617,
            "unit": "iter/sec",
            "range": "stddev: 0.0008924290765518065",
            "extra": "mean: 270.3183119099593 usec\nrounds: 5835"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099043082,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3031.8875012947856,
            "unit": "iter/sec",
            "range": "stddev: 0.000015915486588876965",
            "extra": "mean: 329.827541283423 usec\nrounds: 218"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4199.335521939293,
            "unit": "iter/sec",
            "range": "stddev: 0.000853634884038749",
            "extra": "mean: 238.13291288003356 usec\nrounds: 5590"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163501359,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3533.4006124539305,
            "unit": "iter/sec",
            "range": "stddev: 0.000008634919704751795",
            "extra": "mean: 283.0134789911367 usec\nrounds: 238"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4724.8767810829195,
            "unit": "iter/sec",
            "range": "stddev: 0.0008405906596310639",
            "extra": "mean: 211.64573095402602 usec\nrounds: 5828"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185032713,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3017.1039623663078,
            "unit": "iter/sec",
            "range": "stddev: 0.000016480528030380804",
            "extra": "mean: 331.443666666263 usec\nrounds: 219"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4274.651342434234,
            "unit": "iter/sec",
            "range": "stddev: 0.000829697845215513",
            "extra": "mean: 233.9372079479451 usec\nrounds: 5838"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186803295,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3535.028010845469,
            "unit": "iter/sec",
            "range": "stddev: 0.000009069297668961783",
            "extra": "mean: 282.8831898734604 usec\nrounds: 237"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4819.963725253556,
            "unit": "iter/sec",
            "range": "stddev: 0.000804578167781772",
            "extra": "mean: 207.47044106590133 usec\nrounds: 6117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249179731,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2783.4906808617447,
            "unit": "iter/sec",
            "range": "stddev: 0.00007325567027449678",
            "extra": "mean: 359.2611273591218 usec\nrounds: 212"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4036.8874290832227,
            "unit": "iter/sec",
            "range": "stddev: 0.0008930458742611659",
            "extra": "mean: 247.71560207392258 usec\nrounds: 5883"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251429102,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3511.279552250519,
            "unit": "iter/sec",
            "range": "stddev: 0.000009508794624346627",
            "extra": "mean: 284.79646383013284 usec\nrounds: 235"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4681.793270074908,
            "unit": "iter/sec",
            "range": "stddev: 0.0008649445675564893",
            "extra": "mean: 213.5933695303894 usec\nrounds: 6262"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252242454,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2870.450187925554,
            "unit": "iter/sec",
            "range": "stddev: 0.00011334346178211808",
            "extra": "mean: 348.37740930201966 usec\nrounds: 215"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3674.3972251163,
            "unit": "iter/sec",
            "range": "stddev: 0.0010227999076662226",
            "extra": "mean: 272.1534822540447 usec\nrounds: 5945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261929304,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2942.992627529784,
            "unit": "iter/sec",
            "range": "stddev: 0.000009388543862347633",
            "extra": "mean: 339.79018181889063 usec\nrounds: 220"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4044.450911546486,
            "unit": "iter/sec",
            "range": "stddev: 0.00087053107759128",
            "extra": "mean: 247.252351894074 usec\nrounds: 5280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617599676,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2433.3117583933467,
            "unit": "iter/sec",
            "range": "stddev: 0.00005939600708043855",
            "extra": "mean: 410.9625478735509 usec\nrounds: 188"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3646.062016577709,
            "unit": "iter/sec",
            "range": "stddev: 0.0008986298931014296",
            "extra": "mean: 274.26851091760267 usec\nrounds: 6091"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677422163,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2374.5135231956065,
            "unit": "iter/sec",
            "range": "stddev: 0.000051704375061502016",
            "extra": "mean: 421.1388944436104 usec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3353.1552379783275,
            "unit": "iter/sec",
            "range": "stddev: 0.0009492298033719152",
            "extra": "mean: 298.2265743839872 usec\nrounds: 5559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700832770,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3331.02625799219,
            "unit": "iter/sec",
            "range": "stddev: 0.000007674614286410036",
            "extra": "mean: 300.2077805903458 usec\nrounds: 237"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4628.243402195402,
            "unit": "iter/sec",
            "range": "stddev: 0.0008132982245974022",
            "extra": "mean: 216.0646951985393 usec\nrounds: 6519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702093893,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2234.9923017353235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435701309863241",
            "extra": "mean: 447.4288341948947 usec\nrounds: 193"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3396.2794370998026,
            "unit": "iter/sec",
            "range": "stddev: 0.0009496348429771681",
            "extra": "mean: 294.4398476392548 usec\nrounds: 5382"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705518214,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2876.0569259571657,
            "unit": "iter/sec",
            "range": "stddev: 0.00001759423627182181",
            "extra": "mean: 347.69826388856865 usec\nrounds: 216"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3942.2701682863194,
            "unit": "iter/sec",
            "range": "stddev: 0.0009147833523228152",
            "extra": "mean: 253.66095100344023 usec\nrounds: 5531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765218386,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3115.7534512988505,
            "unit": "iter/sec",
            "range": "stddev: 0.000031313044677563166",
            "extra": "mean: 320.94965652148585 usec\nrounds: 230"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4626.175819354614,
            "unit": "iter/sec",
            "range": "stddev: 0.0007997723277845981",
            "extra": "mean: 216.1612612768158 usec\nrounds: 5764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854617471,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2564.5253143958034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806679160520325",
            "extra": "mean: 389.9357102800125 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4008.281610213737,
            "unit": "iter/sec",
            "range": "stddev: 0.0009062893850672043",
            "extra": "mean: 249.48346878917923 usec\nrounds: 5559"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949703651,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3676.1305382700393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003412631392872924",
            "extra": "mean: 272.0251605838221 usec\nrounds: 274"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4852.086856412164,
            "unit": "iter/sec",
            "range": "stddev: 0.0008015441371600215",
            "extra": "mean: 206.09688770893973 usec\nrounds: 6403"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962528693,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3369.315469930102,
            "unit": "iter/sec",
            "range": "stddev: 0.000007661001470612359",
            "extra": "mean: 296.7961916670111 usec\nrounds: 240"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4737.065085227297,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856268587979923",
            "extra": "mean: 211.10117382987517 usec\nrounds: 6282"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048907885,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2965.448422991756,
            "unit": "iter/sec",
            "range": "stddev: 0.000021854264270288407",
            "extra": "mean: 337.217127853847 usec\nrounds: 219"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4246.513358576542,
            "unit": "iter/sec",
            "range": "stddev: 0.0008547409577838155",
            "extra": "mean: 235.48730818904252 usec\nrounds: 5886"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116154911,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2379.1981388618824,
            "unit": "iter/sec",
            "range": "stddev: 0.00008539809663489961",
            "extra": "mean: 420.30967646871215 usec\nrounds: 204"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3644.524268295799,
            "unit": "iter/sec",
            "range": "stddev: 0.0009068727404471903",
            "extra": "mean: 274.3842340958278 usec\nrounds: 5942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285695658,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3354.9654362389606,
            "unit": "iter/sec",
            "range": "stddev: 0.000007089778293828381",
            "extra": "mean: 298.0656638659851 usec\nrounds: 238"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4744.673768375,
            "unit": "iter/sec",
            "range": "stddev: 0.000769048169026628",
            "extra": "mean: 210.76264645745906 usec\nrounds: 5575"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685716331,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2726.6057557025733,
            "unit": "iter/sec",
            "range": "stddev: 0.00003102558734273985",
            "extra": "mean: 366.75635922375096 usec\nrounds: 206"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3682.298648797936,
            "unit": "iter/sec",
            "range": "stddev: 0.000838250881046738",
            "extra": "mean: 271.5694992111636 usec\nrounds: 4437"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780558471,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3055.4179431459147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068088712980054",
            "extra": "mean: 327.2874672492044 usec\nrounds: 229"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3895.4193041748067,
            "unit": "iter/sec",
            "range": "stddev: 0.0008506755543495347",
            "extra": "mean: 256.711773987534 usec\nrounds: 5013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783612389,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2653.2670895871365,
            "unit": "iter/sec",
            "range": "stddev: 0.000014269197206024095",
            "extra": "mean: 376.8938317309042 usec\nrounds: 208"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3479.4599526241404,
            "unit": "iter/sec",
            "range": "stddev: 0.0008691015359518085",
            "extra": "mean: 287.40092244654795 usec\nrounds: 4758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793952332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1993.5878349374057,
            "unit": "iter/sec",
            "range": "stddev: 0.00013266519744592402",
            "extra": "mean: 501.6081972788512 usec\nrounds: 147"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3055.1479420143182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009791990147249147",
            "extra": "mean: 327.31639153967797 usec\nrounds: 4066"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890201251,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2995.246676065444,
            "unit": "iter/sec",
            "range": "stddev: 0.000006802353438351723",
            "extra": "mean: 333.86231858325607 usec\nrounds: 226"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4086.3982482985843,
            "unit": "iter/sec",
            "range": "stddev: 0.0007801833281946633",
            "extra": "mean: 244.71427874568045 usec\nrounds: 5166"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995382058,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2333.5208198075748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006124631892268668",
            "extra": "mean: 428.5369950470214 usec\nrounds: 202"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3180.8942385818004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009008399146794241",
            "extra": "mean: 314.3770037591219 usec\nrounds: 5320"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996599295,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2499.9549313639723,
            "unit": "iter/sec",
            "range": "stddev: 0.000017387642113716817",
            "extra": "mean: 400.0072111117624 usec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3109.1735053160446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009480679961988156",
            "extra": "mean: 321.62888249568783 usec\nrounds: 4119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035688480,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2568.134292340529,
            "unit": "iter/sec",
            "range": "stddev: 0.000011311951871179971",
            "extra": "mean: 389.3877368416846 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3249.8152427569353,
            "unit": "iter/sec",
            "range": "stddev: 0.000985340345831657",
            "extra": "mean: 307.7098004967396 usec\nrounds: 4431"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397691987,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3037.938246267004,
            "unit": "iter/sec",
            "range": "stddev: 0.000007877632950185995",
            "extra": "mean: 329.1706147183184 usec\nrounds: 231"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3952.5858292655585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009074683158537528",
            "extra": "mean: 252.9989336590353 usec\nrounds: 4914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468389418,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2160.0618884988157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010998686813980489",
            "extra": "mean: 462.94969848987654 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2936.7481403864012,
            "unit": "iter/sec",
            "range": "stddev: 0.0010194077366467887",
            "extra": "mean: 340.51268688925614 usec\nrounds: 4813"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479568989,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3042.3183997829037,
            "unit": "iter/sec",
            "range": "stddev: 0.000006609786928624201",
            "extra": "mean: 328.69669396581196 usec\nrounds: 232"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4081.3692945555076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008054929052689355",
            "extra": "mean: 245.0158091143545 usec\nrounds: 5003"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482670855,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3013.199280815369,
            "unit": "iter/sec",
            "range": "stddev: 0.000005845362639494969",
            "extra": "mean: 331.8731709405562 usec\nrounds: 234"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3923.7432488796685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925954397734341",
            "extra": "mean: 254.85867361110493 usec\nrounds: 5184"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646080349,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2581.552572739766,
            "unit": "iter/sec",
            "range": "stddev: 0.000013979837921507253",
            "extra": "mean: 387.363794392424 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3396.8147558960204,
            "unit": "iter/sec",
            "range": "stddev: 0.0008973391831499499",
            "extra": "mean: 294.39344558435226 usec\nrounds: 4484"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655449075,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2496.7660088655866,
            "unit": "iter/sec",
            "range": "stddev: 0.000019508782810854465",
            "extra": "mean: 400.5181088052193 usec\nrounds: 193"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3056.4914588412535,
            "unit": "iter/sec",
            "range": "stddev: 0.0010744098362155138",
            "extra": "mean: 327.17251576391124 usec\nrounds: 4250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734348660,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2512.6520486638647,
            "unit": "iter/sec",
            "range": "stddev: 0.00005607594810687432",
            "extra": "mean: 397.9858653854452 usec\nrounds: 208"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3493.5770111291467,
            "unit": "iter/sec",
            "range": "stddev: 0.0009004419121735991",
            "extra": "mean: 286.23957531618674 usec\nrounds: 4667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009372291,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3056.437604924186,
            "unit": "iter/sec",
            "range": "stddev: 0.000006140014553116359",
            "extra": "mean: 327.17828048866863 usec\nrounds: 246"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4018.9868723765703,
            "unit": "iter/sec",
            "range": "stddev: 0.0008311625773084325",
            "extra": "mean: 248.81892669847522 usec\nrounds: 5225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016491136,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3024.490579818015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073325056634607",
            "extra": "mean: 330.63419230757546 usec\nrounds: 234"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4126.412547355875,
            "unit": "iter/sec",
            "range": "stddev: 0.0007944075600184569",
            "extra": "mean: 242.341256121078 usec\nrounds: 5228"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017723658,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2987.401482355804,
            "unit": "iter/sec",
            "range": "stddev: 0.000007243326318794183",
            "extra": "mean: 334.73907203507855 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4076.3703867733916,
            "unit": "iter/sec",
            "range": "stddev: 0.0007838352268366476",
            "extra": "mean: 245.31627529350678 usec\nrounds: 5031"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029653058,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3018.716117330418,
            "unit": "iter/sec",
            "range": "stddev: 0.000007081865015174184",
            "extra": "mean: 331.266658119659 usec\nrounds: 234"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4127.304848017046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628437686767461",
            "extra": "mean: 242.28886327125744 usec\nrounds: 5105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033027228,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2660.562563859566,
            "unit": "iter/sec",
            "range": "stddev: 0.000024264445387878986",
            "extra": "mean: 375.86035885182946 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3302.2371612152438,
            "unit": "iter/sec",
            "range": "stddev: 0.0009361972157877147",
            "extra": "mean: 302.8250095859238 usec\nrounds: 4903"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074266935,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2160.3507939924425,
            "unit": "iter/sec",
            "range": "stddev: 0.00010659903194565492",
            "extra": "mean: 462.88778784483753 usec\nrounds: 198"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2985.0525633963994,
            "unit": "iter/sec",
            "range": "stddev: 0.0009982857063099882",
            "extra": "mean: 335.0024760911405 usec\nrounds: 4852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099045079,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2932.163991571807,
            "unit": "iter/sec",
            "range": "stddev: 0.000042072190461320326",
            "extra": "mean: 341.04504484551114 usec\nrounds: 223"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3752.702394986363,
            "unit": "iter/sec",
            "range": "stddev: 0.0008627045433132147",
            "extra": "mean: 266.47463474215465 usec\nrounds: 5325"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163480110,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2930.807886554998,
            "unit": "iter/sec",
            "range": "stddev: 0.00003403957163192171",
            "extra": "mean: 341.2028487392412 usec\nrounds: 238"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3979.006614304834,
            "unit": "iter/sec",
            "range": "stddev: 0.0008393055505063408",
            "extra": "mean: 251.31900922328788 usec\nrounds: 5421"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611184987870,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2257.3582088128464,
            "unit": "iter/sec",
            "range": "stddev: 0.0002968624168091638",
            "extra": "mean: 442.99570892025326 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3388.3884137827717,
            "unit": "iter/sec",
            "range": "stddev: 0.0008560711255098577",
            "extra": "mean: 295.1255517025002 usec\nrounds: 4758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186781509,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3000.3252647734225,
            "unit": "iter/sec",
            "range": "stddev: 0.000005490830455478515",
            "extra": "mean: 333.2971967209421 usec\nrounds: 244"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4140.466785599559,
            "unit": "iter/sec",
            "range": "stddev: 0.0007522675084876024",
            "extra": "mean: 241.51866245563787 usec\nrounds: 5066"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249154194,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2558.1298004622504,
            "unit": "iter/sec",
            "range": "stddev: 0.000009990002930272098",
            "extra": "mean: 390.91057843089175 usec\nrounds: 204"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3318.365524187258,
            "unit": "iter/sec",
            "range": "stddev: 0.0009191096464286912",
            "extra": "mean: 301.3531790609241 usec\nrounds: 4451"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251353362,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2533.2745613670468,
            "unit": "iter/sec",
            "range": "stddev: 0.000013306952508581172",
            "extra": "mean: 394.7459999994489 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3306.024072828344,
            "unit": "iter/sec",
            "range": "stddev: 0.0009118407927563549",
            "extra": "mean: 302.47813626610645 usec\nrounds: 4183"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252206069,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2999.095741258594,
            "unit": "iter/sec",
            "range": "stddev: 0.000007257461691256313",
            "extra": "mean: 333.43383682054184 usec\nrounds: 239"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4065.259844741874,
            "unit": "iter/sec",
            "range": "stddev: 0.0008001769750866103",
            "extra": "mean: 245.98673595082226 usec\nrounds: 5374"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261906016,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2082.413849109791,
            "unit": "iter/sec",
            "range": "stddev: 0.000058106433166112126",
            "extra": "mean: 480.2119427065321 usec\nrounds: 192"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2815.5162974971386,
            "unit": "iter/sec",
            "range": "stddev: 0.0009787928574277623",
            "extra": "mean: 355.17464448312836 usec\nrounds: 3997"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617589451,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1917.4041839460074,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868410193022785",
            "extra": "mean: 521.5384468088546 usec\nrounds: 188"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2687.006362668181,
            "unit": "iter/sec",
            "range": "stddev: 0.0010263316758220746",
            "extra": "mean: 372.1613814888797 usec\nrounds: 4527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677385238,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2229.483083252702,
            "unit": "iter/sec",
            "range": "stddev: 0.000140389428974408",
            "extra": "mean: 448.5344641149064 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3127.35573596142,
            "unit": "iter/sec",
            "range": "stddev: 0.0009616743515277914",
            "extra": "mean: 319.75895434632326 usec\nrounds: 4337"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700824547,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2453.0006829630092,
            "unit": "iter/sec",
            "range": "stddev: 0.000011795703260923998",
            "extra": "mean: 407.6639712925346 usec\nrounds: 209"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3162.0961784996466,
            "unit": "iter/sec",
            "range": "stddev: 0.0009989922946324302",
            "extra": "mean: 316.245915225286 usec\nrounds: 4105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702043228,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2862.7188512194903,
            "unit": "iter/sec",
            "range": "stddev: 0.000008680167423004127",
            "extra": "mean: 349.31827118615223 usec\nrounds: 236"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3956.6853781708132,
            "unit": "iter/sec",
            "range": "stddev: 0.0007699714569606868",
            "extra": "mean: 252.73679972560842 usec\nrounds: 5103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705485012,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1977.3320566579616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001367776568982652",
            "extra": "mean: 505.73195161270775 usec\nrounds: 186"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2827.0536199841754,
            "unit": "iter/sec",
            "range": "stddev: 0.000983811840283232",
            "extra": "mean: 353.72516210201826 usec\nrounds: 4491"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765201313,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2605.5202893793744,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952346452856022",
            "extra": "mean: 383.80050390557363 usec\nrounds: 256"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3605.6581199288553,
            "unit": "iter/sec",
            "range": "stddev: 0.000844587246611138",
            "extra": "mean: 277.3418795511681 usec\nrounds: 4724"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854590661,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2598.800718435692,
            "unit": "iter/sec",
            "range": "stddev: 0.00004910917199599495",
            "extra": "mean: 384.79287500040965 usec\nrounds: 240"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3460.047021221353,
            "unit": "iter/sec",
            "range": "stddev: 0.0008860197712106569",
            "extra": "mean: 289.0134133630972 usec\nrounds: 5852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949713735,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1961.0283756420533,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911033166926103",
            "extra": "mean: 509.9365273960371 usec\nrounds: 146"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2954.86840501961,
            "unit": "iter/sec",
            "range": "stddev: 0.0009087437179113978",
            "extra": "mean: 338.42454652167953 usec\nrounds: 3321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962538735,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2481.926477385105,
            "unit": "iter/sec",
            "range": "stddev: 0.000007921770417239528",
            "extra": "mean: 402.91282159718713 usec\nrounds: 213"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3144.852646730371,
            "unit": "iter/sec",
            "range": "stddev: 0.0009463974109213263",
            "extra": "mean: 317.97992221978234 usec\nrounds: 4487"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048900004,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2826.0248466646403,
            "unit": "iter/sec",
            "range": "stddev: 0.000006555526400215702",
            "extra": "mean: 353.85393061219196 usec\nrounds: 245"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3599.3840104389856,
            "unit": "iter/sec",
            "range": "stddev: 0.0009382423340878215",
            "extra": "mean: 277.82531597067316 usec\nrounds: 4934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116147796,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2538.2002945737663,
            "unit": "iter/sec",
            "range": "stddev: 0.00007106307097476016",
            "extra": "mean: 393.97994009291824 usec\nrounds: 217"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3220.942630825963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009187515850449039",
            "extra": "mean: 310.4681190001713 usec\nrounds: 5000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285696200,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2931.0635366422507,
            "unit": "iter/sec",
            "range": "stddev: 0.00005171112128110381",
            "extra": "mean: 341.1730887094907 usec\nrounds: 248"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3834.6120304173814,
            "unit": "iter/sec",
            "range": "stddev: 0.000814728129506026",
            "extra": "mean: 260.7825751517173 usec\nrounds: 4451"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685718472,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2317.4728914899947,
            "unit": "iter/sec",
            "range": "stddev: 0.00006584667428532993",
            "extra": "mean: 431.5045080665692 usec\nrounds: 124"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3091.9947952691955,
            "unit": "iter/sec",
            "range": "stddev: 0.0008933371594035452",
            "extra": "mean: 323.41580960291947 usec\nrounds: 5415"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780536592,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2793.740141419809,
            "unit": "iter/sec",
            "range": "stddev: 0.000008014726068252394",
            "extra": "mean: 357.94309756088813 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3803.093843152455,
            "unit": "iter/sec",
            "range": "stddev: 0.0007862676962220594",
            "extra": "mean: 262.9438139688611 usec\nrounds: 4510"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783633347,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1939.8162915575665,
            "unit": "iter/sec",
            "range": "stddev: 0.00004147750370484808",
            "extra": "mean: 515.512734041972 usec\nrounds: 94"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2804.125268820389,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106730124861915",
            "extra": "mean: 356.6174489846061 usec\nrounds: 4185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793994838,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2796.5696817891385,
            "unit": "iter/sec",
            "range": "stddev: 0.000016567875862727596",
            "extra": "mean: 357.58093442543446 usec\nrounds: 122"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3707.646990717517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008634890028207081",
            "extra": "mean: 269.71284011223423 usec\nrounds: 4647"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890208370,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2783.1795298013762,
            "unit": "iter/sec",
            "range": "stddev: 0.000010928751090205918",
            "extra": "mean: 359.3012916674354 usec\nrounds: 120"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3611.740318731618,
            "unit": "iter/sec",
            "range": "stddev: 0.0008301465964856005",
            "extra": "mean: 276.87483366777127 usec\nrounds: 4485"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995393769,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1949.6176160094242,
            "unit": "iter/sec",
            "range": "stddev: 0.00008132109615168862",
            "extra": "mean: 512.9210937511175 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3011.6638895858237,
            "unit": "iter/sec",
            "range": "stddev: 0.0008651132206697542",
            "extra": "mean: 332.0423648395652 usec\nrounds: 3851"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996590250,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2788.2665843178543,
            "unit": "iter/sec",
            "range": "stddev: 0.000008052459577653127",
            "extra": "mean: 358.6457642265396 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3638.903987526728,
            "unit": "iter/sec",
            "range": "stddev: 0.0008901676666183759",
            "extra": "mean: 274.8080200598189 usec\nrounds: 4686"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035692533,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2119.8671364514453,
            "unit": "iter/sec",
            "range": "stddev: 0.00032875107679461023",
            "extra": "mean: 471.72767708166435 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3165.928553748901,
            "unit": "iter/sec",
            "range": "stddev: 0.0010040007358518568",
            "extra": "mean: 315.8630976734647 usec\nrounds: 4341"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397719030,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2405.1180316557543,
            "unit": "iter/sec",
            "range": "stddev: 0.000011287494878807137",
            "extra": "mean: 415.78001031058363 usec\nrounds: 97"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3205.7555937382263,
            "unit": "iter/sec",
            "range": "stddev: 0.0009472938405608589",
            "extra": "mean: 311.93893943546135 usec\nrounds: 3649"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468379843,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2753.7170031919204,
            "unit": "iter/sec",
            "range": "stddev: 0.000008032091831886097",
            "extra": "mean: 363.1455225213296 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3781.668938966672,
            "unit": "iter/sec",
            "range": "stddev: 0.0008219763620901236",
            "extra": "mean: 264.43351232994144 usec\nrounds: 4339"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479574405,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2743.781595372282,
            "unit": "iter/sec",
            "range": "stddev: 0.000007398969130503939",
            "extra": "mean: 364.4604955753842 usec\nrounds: 113"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3741.093743999661,
            "unit": "iter/sec",
            "range": "stddev: 0.0008281148943946006",
            "extra": "mean: 267.301508176292 usec\nrounds: 4831"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482685025,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2427.5935932281095,
            "unit": "iter/sec",
            "range": "stddev: 0.000010625052946439722",
            "extra": "mean: 411.930564815111 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2869.9011440928143,
            "unit": "iter/sec",
            "range": "stddev: 0.0010547529941800082",
            "extra": "mean: 348.4440577538093 usec\nrounds: 4069"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646080886,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2591.119564894284,
            "unit": "iter/sec",
            "range": "stddev: 0.00002755759882316938",
            "extra": "mean: 385.93356074666485 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3323.015212645218,
            "unit": "iter/sec",
            "range": "stddev: 0.000920594366114724",
            "extra": "mean: 300.93151430503696 usec\nrounds: 4439"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655437225,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2752.500646838574,
            "unit": "iter/sec",
            "range": "stddev: 0.000017866257536493695",
            "extra": "mean: 363.30599999987834 usec\nrounds: 109"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3678.022240029434,
            "unit": "iter/sec",
            "range": "stddev: 0.0008296958738737678",
            "extra": "mean: 271.8852510233862 usec\nrounds: 4641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734349150,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2404.2990892430694,
            "unit": "iter/sec",
            "range": "stddev: 0.00004572997266929619",
            "extra": "mean: 415.9216315782176 usec\nrounds: 95"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3315.5156808271263,
            "unit": "iter/sec",
            "range": "stddev: 0.0008983157504715738",
            "extra": "mean: 301.6122064458246 usec\nrounds: 4437"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009404515,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2372.7534110955967,
            "unit": "iter/sec",
            "range": "stddev: 0.000009743180221321366",
            "extra": "mean: 421.4512959179603 usec\nrounds: 98"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3364.3379117371032,
            "unit": "iter/sec",
            "range": "stddev: 0.0008896874908946024",
            "extra": "mean: 297.235303419231 usec\nrounds: 3744"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016505154,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2796.0962635987344,
            "unit": "iter/sec",
            "range": "stddev: 0.000010449649920866627",
            "extra": "mean: 357.64147787706827 usec\nrounds: 113"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3527.0700339722102,
            "unit": "iter/sec",
            "range": "stddev: 0.0008608959892132035",
            "extra": "mean: 283.5214470844497 usec\nrounds: 4630"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017746497,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2375.9810609006513,
            "unit": "iter/sec",
            "range": "stddev: 0.00003098944875695177",
            "extra": "mean: 420.8787757007351 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3224.897284068137,
            "unit": "iter/sec",
            "range": "stddev: 0.0008596130459741074",
            "extra": "mean: 310.0873956328066 usec\nrounds: 4259"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029661132,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2781.734082646358,
            "unit": "iter/sec",
            "range": "stddev: 0.000008626008169160239",
            "extra": "mean: 359.4879921263596 usec\nrounds: 127"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3737.766955186421,
            "unit": "iter/sec",
            "range": "stddev: 0.0008540673042987582",
            "extra": "mean: 267.5394191209347 usec\nrounds: 4686"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033032443,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2399.716501855895,
            "unit": "iter/sec",
            "range": "stddev: 0.000010512197744675113",
            "extra": "mean: 416.7158909090383 usec\nrounds: 110"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3399.7601909436376,
            "unit": "iter/sec",
            "range": "stddev: 0.0008299485334873094",
            "extra": "mean: 294.1383932501545 usec\nrounds: 4089"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074245285,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2803.3753668144054,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300887707027068",
            "extra": "mean: 356.7128440371303 usec\nrounds: 109"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3748.967802828243,
            "unit": "iter/sec",
            "range": "stddev: 0.0008479082563316826",
            "extra": "mean: 266.74008756372734 usec\nrounds: 4511"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099061402,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2008.649635360113,
            "unit": "iter/sec",
            "range": "stddev: 0.00005149753818049611",
            "extra": "mean: 497.8469029123234 usec\nrounds: 103"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2980.1410659713356,
            "unit": "iter/sec",
            "range": "stddev: 0.0008812201921168116",
            "extra": "mean: 335.5545854585457 usec\nrounds: 4195"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163486691,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2455.182577436331,
            "unit": "iter/sec",
            "range": "stddev: 0.000014620179219802224",
            "extra": "mean: 407.3016846853755 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3259.045081070272,
            "unit": "iter/sec",
            "range": "stddev: 0.0008562184169365432",
            "extra": "mean: 306.8383453203414 usec\nrounds: 4060"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185004654,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2027.695931814317,
            "unit": "iter/sec",
            "range": "stddev: 0.000052664182098111854",
            "extra": "mean: 493.17059047666584 usec\nrounds: 105"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2876.417837132603,
            "unit": "iter/sec",
            "range": "stddev: 0.0008987290087597097",
            "extra": "mean: 347.6546373376908 usec\nrounds: 4012"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186785552,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2848.3585843723517,
            "unit": "iter/sec",
            "range": "stddev: 0.000007570999619526656",
            "extra": "mean: 351.07939200020155 usec\nrounds: 125"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3765.092693538177,
            "unit": "iter/sec",
            "range": "stddev: 0.0008223189743543957",
            "extra": "mean: 265.597710706099 usec\nrounds: 4829"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249154952,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2349.147583232415,
            "unit": "iter/sec",
            "range": "stddev: 0.000010805689794563405",
            "extra": "mean: 425.6863243236532 usec\nrounds: 111"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3367.2800353478588,
            "unit": "iter/sec",
            "range": "stddev: 0.0008209093112810363",
            "extra": "mean: 296.9755973671772 usec\nrounds: 4026"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251349332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2565.853165093069,
            "unit": "iter/sec",
            "range": "stddev: 0.000015430914802886776",
            "extra": "mean: 389.7339152545496 usec\nrounds: 118"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3537.4517589905463,
            "unit": "iter/sec",
            "range": "stddev: 0.0008097510469268851",
            "extra": "mean: 282.6893674121402 usec\nrounds: 4069"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252202526,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2780.985567379681,
            "unit": "iter/sec",
            "range": "stddev: 0.000010544118065988441",
            "extra": "mean: 359.5847500000609 usec\nrounds: 124"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3587.7842618016443,
            "unit": "iter/sec",
            "range": "stddev: 0.0008975569128973737",
            "extra": "mean: 278.72355945333214 usec\nrounds: 4390"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261888423,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2757.579128398331,
            "unit": "iter/sec",
            "range": "stddev: 0.000011583413521043519",
            "extra": "mean: 362.636919354994 usec\nrounds: 124"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3638.171945424749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008422776308461445",
            "extra": "mean: 274.86331459885196 usec\nrounds: 4377"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617565757,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2410.395879575923,
            "unit": "iter/sec",
            "range": "stddev: 0.00001868794359442269",
            "extra": "mean: 414.869610620118 usec\nrounds: 113"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3323.299334358347,
            "unit": "iter/sec",
            "range": "stddev: 0.0008326976374149882",
            "extra": "mean: 300.9057865060106 usec\nrounds: 4150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677395247,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1883.5130008900194,
            "unit": "iter/sec",
            "range": "stddev: 0.00010103419238061583",
            "extra": "mean: 530.9228019809093 usec\nrounds: 101"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2650.537592370587,
            "unit": "iter/sec",
            "range": "stddev: 0.0009713577744478325",
            "extra": "mean: 377.2819532454246 usec\nrounds: 4021"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700822228,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2880.899522387809,
            "unit": "iter/sec",
            "range": "stddev: 0.00004963531322930763",
            "extra": "mean: 347.11380672213045 usec\nrounds: 119"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3890.1519698268685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008174843608438834",
            "extra": "mean: 257.059366255171 usec\nrounds: 4617"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702070855,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1992.1157959232644,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454134451327547",
            "extra": "mean: 501.9788518551156 usec\nrounds: 81"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2741.41963285293,
            "unit": "iter/sec",
            "range": "stddev: 0.0009429843565764057",
            "extra": "mean: 364.774508804157 usec\nrounds: 3408"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705522975,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2623.057856781655,
            "unit": "iter/sec",
            "range": "stddev: 0.00000840543309935164",
            "extra": "mean: 381.234442623749 usec\nrounds: 122"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3433.3727859130795,
            "unit": "iter/sec",
            "range": "stddev: 0.00087792039775335",
            "extra": "mean: 291.25878905516447 usec\nrounds: 4404"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765201330,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2669.6459915888427,
            "unit": "iter/sec",
            "range": "stddev: 0.000008836421824792855",
            "extra": "mean: 374.5815000006233 usec\nrounds: 122"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3445.0222795690465,
            "unit": "iter/sec",
            "range": "stddev: 0.0009169555117785781",
            "extra": "mean: 290.27388470912723 usec\nrounds: 4493"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854593336,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2699.217018095002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074469932826806765",
            "extra": "mean: 370.47780645135356 usec\nrounds: 124"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3605.482226805179,
            "unit": "iter/sec",
            "range": "stddev: 0.0008381309488773113",
            "extra": "mean: 277.35540964962706 usec\nrounds: 4394"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949728694,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1959.6537729402269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000740797894916987",
            "extra": "mean: 510.2942233002818 usec\nrounds: 103"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2717.807948046016,
            "unit": "iter/sec",
            "range": "stddev: 0.0009152046151263946",
            "extra": "mean: 367.94358509362513 usec\nrounds: 3596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962537583,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2413.593258214705,
            "unit": "iter/sec",
            "range": "stddev: 0.000019050321149215052",
            "extra": "mean: 414.32001709338687 usec\nrounds: 117"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3536.1711300083584,
            "unit": "iter/sec",
            "range": "stddev: 0.0008014456055417494",
            "extra": "mean: 282.79174373487865 usec\nrounds: 3711"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048899578,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2986.492228389258,
            "unit": "iter/sec",
            "range": "stddev: 0.000007380478213938179",
            "extra": "mean: 334.8409851845965 usec\nrounds: 135"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3878.4370041011816,
            "unit": "iter/sec",
            "range": "stddev: 0.0008165262392832788",
            "extra": "mean: 257.83582379772275 usec\nrounds: 4824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116152313,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2355.2056135221846,
            "unit": "iter/sec",
            "range": "stddev: 0.000058820687829382314",
            "extra": "mean: 424.591379308285 usec\nrounds: 116"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3197.6833556585093,
            "unit": "iter/sec",
            "range": "stddev: 0.000890545747390239",
            "extra": "mean: 312.72639870062017 usec\nrounds: 5079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285704977,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2666.677107617397,
            "unit": "iter/sec",
            "range": "stddev: 0.000009459637263162164",
            "extra": "mean: 374.99853174705237 usec\nrounds: 126"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3619.9690137507855,
            "unit": "iter/sec",
            "range": "stddev: 0.0008152437958117587",
            "extra": "mean: 276.2454585112215 usec\nrounds: 4218"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685725840,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2279.0123694220697,
            "unit": "iter/sec",
            "range": "stddev: 0.000058127197233363276",
            "extra": "mean: 438.78656097579153 usec\nrounds: 82"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5263.330803910702,
            "unit": "iter/sec",
            "range": "stddev: 0.00007116625877729816",
            "extra": "mean: 189.99375818388444 usec\nrounds: 947"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780544498,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2791.5047911085567,
            "unit": "iter/sec",
            "range": "stddev: 0.000008138390211540428",
            "extra": "mean: 358.2297272729674 usec\nrounds: 121"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3698.220161148341,
            "unit": "iter/sec",
            "range": "stddev: 0.0009111337214311819",
            "extra": "mean: 270.40034298268716 usec\nrounds: 4560"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783637317,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1987.4240128952752,
            "unit": "iter/sec",
            "range": "stddev: 0.00013178361082606113",
            "extra": "mean: 503.163891304303 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2877.5003541548153,
            "unit": "iter/sec",
            "range": "stddev: 0.0009713580443940751",
            "extra": "mean: 347.52384949531023 usec\nrounds: 4857"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793960332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2539.714680701487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001811872157864053",
            "extra": "mean: 393.74501694961776 usec\nrounds: 118"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3220.7233932859212,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833479352116566",
            "extra": "mean: 310.4892528444539 usec\nrounds: 3955"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890201308,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2764.9266136776323,
            "unit": "iter/sec",
            "range": "stddev: 0.000008342917644768106",
            "extra": "mean: 361.67325203250107 usec\nrounds: 123"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3815.0096748778706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007884846631585884",
            "extra": "mean: 262.1225331576683 usec\nrounds: 4554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995396256,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2333.0575788852993,
            "unit": "iter/sec",
            "range": "stddev: 0.000021138130907103394",
            "extra": "mean: 428.6220833340022 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3271.8207939322087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008591521629310101",
            "extra": "mean: 305.64021166885453 usec\nrounds: 3685"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996609857,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2276.7880551589374,
            "unit": "iter/sec",
            "range": "stddev: 0.000044418402770889795",
            "extra": "mean: 439.21523469613965 usec\nrounds: 98"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3138.7677523361963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009303901744977955",
            "extra": "mean: 318.5963661235198 usec\nrounds: 4971"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035693638,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2435.0564900019835,
            "unit": "iter/sec",
            "range": "stddev: 0.000022730055092735083",
            "extra": "mean: 410.668090907076 usec\nrounds: 99"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3130.256260281273,
            "unit": "iter/sec",
            "range": "stddev: 0.0009839583246313705",
            "extra": "mean: 319.4626627502196 usec\nrounds: 4596"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397715871,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2186.3192279786076,
            "unit": "iter/sec",
            "range": "stddev: 0.0001655582967884659",
            "extra": "mean: 457.38974766487513 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3185.646065687629,
            "unit": "iter/sec",
            "range": "stddev: 0.0009670899128788342",
            "extra": "mean: 313.9080674312599 usec\nrounds: 4360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468417392,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2246.863639639599,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072419171599422",
            "extra": "mean: 445.06483720587585 usec\nrounds: 86"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2979.616138910259,
            "unit": "iter/sec",
            "range": "stddev: 0.001023344509447148",
            "extra": "mean: 335.6137010204717 usec\nrounds: 4114"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479581162,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2715.661627949128,
            "unit": "iter/sec",
            "range": "stddev: 0.000011160733191944158",
            "extra": "mean: 368.2343888900479 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3695.7320445740384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008490483599356557",
            "extra": "mean: 270.5823874509976 usec\nrounds: 4829"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482675588,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2526.1458919183438,
            "unit": "iter/sec",
            "range": "stddev: 0.00003518165358695624",
            "extra": "mean: 395.8599553569745 usec\nrounds: 112"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3641.9459351418095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008241378119406718",
            "extra": "mean: 274.57848573500644 usec\nrounds: 5538"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646096678,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1936.038547369525,
            "unit": "iter/sec",
            "range": "stddev: 0.00047250282102180417",
            "extra": "mean: 516.5186413042702 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3102.0884120391083,
            "unit": "iter/sec",
            "range": "stddev: 0.0010153992342176188",
            "extra": "mean: 322.3634749154896 usec\nrounds: 4146"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655455968,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2052.150646907502,
            "unit": "iter/sec",
            "range": "stddev: 0.00011128938743225328",
            "extra": "mean: 487.2936601934924 usec\nrounds: 103"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2902.5340551492486,
            "unit": "iter/sec",
            "range": "stddev: 0.0009793533831712596",
            "extra": "mean: 344.5265347450264 usec\nrounds: 4720"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734349523,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2491.7924400816855,
            "unit": "iter/sec",
            "range": "stddev: 0.000039359792688036854",
            "extra": "mean: 401.3175350861961 usec\nrounds: 114"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3674.40600694126,
            "unit": "iter/sec",
            "range": "stddev: 0.000814726346684807",
            "extra": "mean: 272.1528318076218 usec\nrounds: 3823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009395686,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2392.31956062156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000165985576031229",
            "extra": "mean: 418.00435713537587 usec\nrounds: 98"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3248.675047608586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008888558253208371",
            "extra": "mean: 307.8177981316167 usec\nrounds: 4176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016498364,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3126.0493773662547,
            "unit": "iter/sec",
            "range": "stddev: 0.000007601116868872317",
            "extra": "mean: 319.8925798294701 usec\nrounds: 119"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4112.77213250625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008465069515464048",
            "extra": "mean: 243.14500482442674 usec\nrounds: 5182"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017757577,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1894.3291068152057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005230472774615157",
            "extra": "mean: 527.8913766368852 usec\nrounds: 77"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2831.198659271162,
            "unit": "iter/sec",
            "range": "stddev: 0.0009276563006442332",
            "extra": "mean: 353.2072879186199 usec\nrounds: 3890"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029674474,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2418.9899174904826,
            "unit": "iter/sec",
            "range": "stddev: 0.000020783495157267762",
            "extra": "mean: 413.39568750142774 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3513.9366499751363,
            "unit": "iter/sec",
            "range": "stddev: 0.0008154627918846726",
            "extra": "mean: 284.58111218569513 usec\nrounds: 4136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033038384,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2364.3239570327205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010046051805512564",
            "extra": "mean: 422.9538837203267 usec\nrounds: 86"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3374.1615752722605,
            "unit": "iter/sec",
            "range": "stddev: 0.0008302996778900166",
            "extra": "mean: 296.3699211467993 usec\nrounds: 4185"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074282584,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1905.2135330831582,
            "unit": "iter/sec",
            "range": "stddev: 0.00019309605797435844",
            "extra": "mean: 524.8755494517853 usec\nrounds: 91"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2977.5276838391164,
            "unit": "iter/sec",
            "range": "stddev: 0.0010065079342442152",
            "extra": "mean: 335.84910240385614 usec\nrounds: 3994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099060062,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2348.5919394600014,
            "unit": "iter/sec",
            "range": "stddev: 0.000011682439488726984",
            "extra": "mean: 425.7870357120975 usec\nrounds: 84"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2812.77180124359,
            "unit": "iter/sec",
            "range": "stddev: 0.0010114614481036603",
            "extra": "mean: 355.52119782979815 usec\nrounds: 4241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163489148,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2882.4125002418937,
            "unit": "iter/sec",
            "range": "stddev: 0.000049820398370177545",
            "extra": "mean: 346.9316067412556 usec\nrounds: 89"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3498.376338993554,
            "unit": "iter/sec",
            "range": "stddev: 0.0009090086762281352",
            "extra": "mean: 285.8468909859165 usec\nrounds: 5669"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611184991332,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2513.9243154312826,
            "unit": "iter/sec",
            "range": "stddev: 0.00003537939948053842",
            "extra": "mean: 397.7844495403763 usec\nrounds: 109"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3258.7582045665845,
            "unit": "iter/sec",
            "range": "stddev: 0.000966327528804608",
            "extra": "mean: 306.8653570549277 usec\nrounds: 4876"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186784698,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2754.148784150402,
            "unit": "iter/sec",
            "range": "stddev: 0.000012421449543624772",
            "extra": "mean: 363.088590476596 usec\nrounds: 105"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3679.285183735594,
            "unit": "iter/sec",
            "range": "stddev: 0.0008348027661793634",
            "extra": "mean: 271.7919242630428 usec\nrounds: 4410"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249152769,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2726.8443488194157,
            "unit": "iter/sec",
            "range": "stddev: 0.000008682486715766278",
            "extra": "mean: 366.72426881752483 usec\nrounds: 93"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3786.6296981543733,
            "unit": "iter/sec",
            "range": "stddev: 0.0008524673353125005",
            "extra": "mean: 264.08708527464574 usec\nrounds: 4550"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251354156,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2748.383558751767,
            "unit": "iter/sec",
            "range": "stddev: 0.000009763314068205612",
            "extra": "mean: 363.8502336457616 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3715.5997091005997,
            "unit": "iter/sec",
            "range": "stddev: 0.0008290039021173379",
            "extra": "mean: 269.1355577272506 usec\nrounds: 4400"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252237684,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1977.5418126963173,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193161895372801",
            "extra": "mean: 505.6783090904818 usec\nrounds: 55"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2689.0529762092133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009821218528324866",
            "extra": "mean: 371.87813287699174 usec\nrounds: 3793"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261881274,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2859.230776373643,
            "unit": "iter/sec",
            "range": "stddev: 0.00004834949448725265",
            "extra": "mean: 349.74441666730314 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4308.361253068534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007769881554803344",
            "extra": "mean: 232.10681306906943 usec\nrounds: 4392"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617577655,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2278.0826005233134,
            "unit": "iter/sec",
            "range": "stddev: 0.0000156460987607291",
            "extra": "mean: 438.9656458331596 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3216.3520901303586,
            "unit": "iter/sec",
            "range": "stddev: 0.0008570864301967825",
            "extra": "mean: 310.9112348329595 usec\nrounds: 3956"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700817114,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2675.81056991343,
            "unit": "iter/sec",
            "range": "stddev: 0.00004365542589024979",
            "extra": "mean: 373.7185327107639 usec\nrounds: 107"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4065.9003724168556,
            "unit": "iter/sec",
            "range": "stddev: 0.000736020578786095",
            "extra": "mean: 245.94798406375588 usec\nrounds: 4016"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702074010,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1873.8837394531688,
            "unit": "iter/sec",
            "range": "stddev: 0.00004462664603584317",
            "extra": "mean: 533.6510365855552 usec\nrounds: 82"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2681.2315862970618,
            "unit": "iter/sec",
            "range": "stddev: 0.0009704209733568642",
            "extra": "mean: 372.9629343137266 usec\nrounds: 4080"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705464415,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2632.1315410694106,
            "unit": "iter/sec",
            "range": "stddev: 0.000009451968223135717",
            "extra": "mean: 379.92022222176223 usec\nrounds: 108"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3525.25442827651,
            "unit": "iter/sec",
            "range": "stddev: 0.0009226371536506108",
            "extra": "mean: 283.66746864534764 usec\nrounds: 4481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765229019,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2254.428704413798,
            "unit": "iter/sec",
            "range": "stddev: 0.000012664343843608857",
            "extra": "mean: 443.5713571434597 usec\nrounds: 98"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3284.474128709081,
            "unit": "iter/sec",
            "range": "stddev: 0.0008580875917759787",
            "extra": "mean: 304.4627422268772 usec\nrounds: 3988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854629427,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1571.7836440085125,
            "unit": "iter/sec",
            "range": "stddev: 0.0004447662582075856",
            "extra": "mean: 636.219879123888 usec\nrounds: 91"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2777.927913796417,
            "unit": "iter/sec",
            "range": "stddev: 0.000954670478792675",
            "extra": "mean: 359.98054342359217 usec\nrounds: 3938"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949719349,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2339.9626996393868,
            "unit": "iter/sec",
            "range": "stddev: 0.000016070746651464984",
            "extra": "mean: 427.3572395637378 usec\nrounds: 96"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3050.0440178084173,
            "unit": "iter/sec",
            "range": "stddev: 0.0009103668997532133",
            "extra": "mean: 327.8641207016223 usec\nrounds: 3894"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962540687,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2289.551805417694,
            "unit": "iter/sec",
            "range": "stddev: 0.000020948093401868955",
            "extra": "mean: 436.76670588266734 usec\nrounds: 102"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3225.6855237613045,
            "unit": "iter/sec",
            "range": "stddev: 0.0008745839391993101",
            "extra": "mean: 310.01162160220497 usec\nrounds: 4157"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048936520,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1817.598116354058,
            "unit": "iter/sec",
            "range": "stddev: 0.00011972976954764256",
            "extra": "mean: 550.1766265063654 usec\nrounds: 83"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2858.1850756641384,
            "unit": "iter/sec",
            "range": "stddev: 0.0009571712245879201",
            "extra": "mean: 349.8723747858197 usec\nrounds: 4085"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116149516,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2738.9406142935563,
            "unit": "iter/sec",
            "range": "stddev: 0.000042619960411618655",
            "extra": "mean: 365.10466666613945 usec\nrounds: 117"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3637.8705876365757,
            "unit": "iter/sec",
            "range": "stddev: 0.000889803612972051",
            "extra": "mean: 274.8860840180883 usec\nrounds: 5225"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285714555,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1999.713812381907,
            "unit": "iter/sec",
            "range": "stddev: 0.00009535127614036741",
            "extra": "mean: 500.07155714390757 usec\nrounds: 70"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2714.56985491326,
            "unit": "iter/sec",
            "range": "stddev: 0.0010432291328798323",
            "extra": "mean: 368.38248910413597 usec\nrounds: 4956"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ebd6c80c0475e1d203671a5a3807961e0eb44cf",
          "message": "Add throughput performance tests for OTLP exporter (#1491)",
          "timestamp": "2020-12-22T17:06:41-08:00",
          "tree_id": "7b1127d9443b4809f6a7a1f745a4d50840ffcaf0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/8ebd6c80c0475e1d203671a5a3807961e0eb44cf"
        },
        "date": 1608685749876,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 940.4831174956076,
            "unit": "iter/sec",
            "range": "stddev: 0.00002071431149481148",
            "extra": "mean: 1.0632833076928363 msec\nrounds: 182"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3971.9363435317496,
            "unit": "iter/sec",
            "range": "stddev: 0.0011126804543639336",
            "extra": "mean: 251.7663712381715 usec\nrounds: 5848"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd8db6e2a461d896c1c0556efd0f4b569106fa96",
          "message": "Add protobuf via gRPC exporting support for Jaeger (#1471)",
          "timestamp": "2021-01-04T09:13:16-08:00",
          "tree_id": "ab66aeae2640c477e711409223dda795b083ee77",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bd8db6e2a461d896c1c0556efd0f4b569106fa96"
        },
        "date": 1609780546827,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 949.5846317457982,
            "unit": "iter/sec",
            "range": "stddev: 0.000016911423280007464",
            "extra": "mean: 1.0530920220997193 msec\nrounds: 181"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3925.2554693585244,
            "unit": "iter/sec",
            "range": "stddev: 0.001194250571208821",
            "extra": "mean: 254.76048828063227 usec\nrounds: 5845"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton@ryzhov.me",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "336af87a095deb46a0de8a9ef39b7f60c87e422c",
          "message": "Recreate span on every run of a decorated function (#1451)",
          "timestamp": "2021-01-04T10:05:15-08:00",
          "tree_id": "9ff9e572cd69a4b7d44eda02d5b94817e12d3646",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/336af87a095deb46a0de8a9ef39b7f60c87e422c"
        },
        "date": 1609783617868,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 958.175126850792,
            "unit": "iter/sec",
            "range": "stddev: 0.00001646854556476619",
            "extra": "mean: 1.0436505519472965 msec\nrounds: 154"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3889.569427277814,
            "unit": "iter/sec",
            "range": "stddev: 0.0012907036921134295",
            "extra": "mean: 257.09786615118173 usec\nrounds: 5820"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90db9dc30609bd192976625465a37b0f5724e943",
          "message": "Code cleanup (#1503)",
          "timestamp": "2021-01-04T12:57:26-08:00",
          "tree_id": "0833b716974d262754c863b9144afab251c26686",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/90db9dc30609bd192976625465a37b0f5724e943"
        },
        "date": 1609793943221,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1089.3716854087377,
            "unit": "iter/sec",
            "range": "stddev: 0.00007916436152656882",
            "extra": "mean: 917.9603374993128 usec\nrounds: 160"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4074.837047435268,
            "unit": "iter/sec",
            "range": "stddev: 0.0012240953529210699",
            "extra": "mean: 245.40858649290217 usec\nrounds: 6989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87d7ced747177b6d840e069f935734a163216108",
          "message": "Add support for OTLP v0.6.0 (#1472)",
          "timestamp": "2021-01-05T15:41:48-08:00",
          "tree_id": "f5fca2206fc7bd721679294cd397ee47b729dcf2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/87d7ced747177b6d840e069f935734a163216108"
        },
        "date": 1609890207358,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1239.3067804333693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011872762674399925",
            "extra": "mean: 806.9027102799463 usec\nrounds: 214"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4346.757859217141,
            "unit": "iter/sec",
            "range": "stddev: 0.0014198419145730328",
            "extra": "mean: 230.05652313471674 usec\nrounds: 6916"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd",
          "message": "Added CodeQL Analysis workflow (#1505)",
          "timestamp": "2021-01-06T20:54:40-08:00",
          "tree_id": "62c9c7dd5ed8e07cad6957a648a07e5cfd07e836",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ff1a058f6a4c563716d2e991a0f1e3cccb92c2bd"
        },
        "date": 1609995361234,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1283.4812422654948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014173822511224555",
            "extra": "mean: 779.1309814819598 usec\nrounds: 216"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4710.725124904287,
            "unit": "iter/sec",
            "range": "stddev: 0.0011346848625258873",
            "extra": "mean: 212.28154338984447 usec\nrounds: 7133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb7125d7a7fb42dde67088e055c6053ea6c103b2",
          "message": "Pass OTLP metadata as tuple instead of string (#1507)",
          "timestamp": "2021-01-06T21:14:55-08:00",
          "tree_id": "661f947040e0d995d408e9069820b011ae28f561",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/eb7125d7a7fb42dde67088e055c6053ea6c103b2"
        },
        "date": 1609996600429,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 914.9815316732029,
            "unit": "iter/sec",
            "range": "stddev: 0.00013171740978453887",
            "extra": "mean: 1.0929182342853698 msec\nrounds: 175"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3821.7466409039107,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531494123174827",
            "extra": "mean: 261.6604641702471 usec\nrounds: 5875"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd39fc17b21baf68eddc4ddd0acfe2e80df59eae",
          "message": "Update Jaeger exporter status code (#1488)",
          "timestamp": "2021-01-07T08:05:29-08:00",
          "tree_id": "2d2eb6aea5add7398b0ba85fe8a38da6ff809abb",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cd39fc17b21baf68eddc4ddd0acfe2e80df59eae"
        },
        "date": 1610035683364,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 887.3293711961253,
            "unit": "iter/sec",
            "range": "stddev: 0.00014669106904294796",
            "extra": "mean: 1.1269772335519492 msec\nrounds: 137"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3718.038605293384,
            "unit": "iter/sec",
            "range": "stddev: 0.0012957810660632417",
            "extra": "mean: 268.9590147278989 usec\nrounds: 7740"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09ac955f5301fbb3d4fc521bdf86c0a76b4a3387",
          "message": "Move idsgenerator from api into sdk package (#1514)",
          "timestamp": "2021-01-11T12:39:23-08:00",
          "tree_id": "23ec81a5ee30e905bb2fae19dcbaf05fc04b00c3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/09ac955f5301fbb3d4fc521bdf86c0a76b4a3387"
        },
        "date": 1610397712753,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 909.5599033766159,
            "unit": "iter/sec",
            "range": "stddev: 0.00007371497972276668",
            "extra": "mean: 1.099432809524296 msec\nrounds: 147"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3747.3249835268107,
            "unit": "iter/sec",
            "range": "stddev: 0.0011902647864082945",
            "extra": "mean: 266.85702585070317 usec\nrounds: 5996"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b326793803118b49f094e7e830ab3ff36db495f8",
          "message": "Remove ThreadLocalRuntimeContext since py34 is no longer supported (#1512)",
          "timestamp": "2021-01-12T08:17:01-08:00",
          "tree_id": "d70595807dd14187842e0d69466769eaa9e252b4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b326793803118b49f094e7e830ab3ff36db495f8"
        },
        "date": 1610468375827,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1092.4521036436317,
            "unit": "iter/sec",
            "range": "stddev: 0.000015801759929850333",
            "extra": "mean: 915.3719386549961 usec\nrounds: 163"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4078.874137035102,
            "unit": "iter/sec",
            "range": "stddev: 0.0014204075485004578",
            "extra": "mean: 245.16569190509298 usec\nrounds: 6498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "287efdc3fffd7f27be44af84d59ab22bc99c9af4",
          "message": "Move b3 propagator out of SDK (#1513)",
          "timestamp": "2021-01-12T11:24:01-08:00",
          "tree_id": "5da1da813e0edf701e97f1785bfa562b55ebff95",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/287efdc3fffd7f27be44af84d59ab22bc99c9af4"
        },
        "date": 1610479576680,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 931.3074702681416,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466817880540671",
            "extra": "mean: 1.0737592384092876 msec\nrounds: 151"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3849.534415700955,
            "unit": "iter/sec",
            "range": "stddev: 0.0012409663090017105",
            "extra": "mean: 259.7716741851525 usec\nrounds: 6473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db74594d93b7e42d26ed2061b7672d1ad823f30c",
          "message": "Update default port for OTLP exporter to 4317 (#1516)",
          "timestamp": "2021-01-12T12:14:49-08:00",
          "tree_id": "319abf2aeb7c5ad6e78c5bf358e34232b37ca479",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db74594d93b7e42d26ed2061b7672d1ad823f30c"
        },
        "date": 1610482689507,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1031.995689932212,
            "unit": "iter/sec",
            "range": "stddev: 0.00005680186318800507",
            "extra": "mean: 968.9962949997266 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4116.897371055554,
            "unit": "iter/sec",
            "range": "stddev: 0.0011191420742719133",
            "extra": "mean: 242.90136718749554 usec\nrounds: 5760"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b",
          "message": "Zipkin: Update span boolean attribute conversion (#1509)",
          "timestamp": "2021-01-14T09:39:02-08:00",
          "tree_id": "4c21b35c5bfa2fd4f84a1eeb2aa11f05d87d5aa9",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/baa2fcb605a3d4ac95ccf6a509ee2ed4c06cb22b"
        },
        "date": 1610646082202,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 889.6337861565667,
            "unit": "iter/sec",
            "range": "stddev: 0.00011263702611963307",
            "extra": "mean: 1.1240580287763597 msec\nrounds: 139"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3817.9804804860582,
            "unit": "iter/sec",
            "range": "stddev: 0.0011598303208649216",
            "extra": "mean: 261.9185732119543 usec\nrounds: 5928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d48ecda850d2a2a72ccc446618d7526db3fd3d2",
          "message": "adding propagator to GH action (#1530)",
          "timestamp": "2021-01-14T12:15:06-08:00",
          "tree_id": "3706c17f1e2cb08d5100f4fd210bdcf6604eff3e",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/3d48ecda850d2a2a72ccc446618d7526db3fd3d2"
        },
        "date": 1610655453976,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 908.6713541926122,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555664733141753",
            "extra": "mean: 1.1005078958261392 msec\nrounds: 144"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3709.8393382121735,
            "unit": "iter/sec",
            "range": "stddev: 0.0012280205731516564",
            "extra": "mean: 269.5534520052598 usec\nrounds: 5522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aaronabbott@google.com",
            "name": "Aaron Abbott",
            "username": "aabmass"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "76883321c2fb3f5f55c4136236183af7631253d3",
          "message": "boundlist typing wip (#1385)",
          "timestamp": "2021-01-15T10:09:06-08:00",
          "tree_id": "073d78c7e9c16897cbafb2296b0376dcb5fc55cc",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/76883321c2fb3f5f55c4136236183af7631253d3"
        },
        "date": 1610734343065,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 923.1176328729523,
            "unit": "iter/sec",
            "range": "stddev: 0.00007830561619588555",
            "extra": "mean: 1.083285557971385 msec\nrounds: 138"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3921.5450343769535,
            "unit": "iter/sec",
            "range": "stddev: 0.0011895726869282821",
            "extra": "mean: 255.0015341488684 usec\nrounds: 5886"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89fb4e58d0c9d4b3192c91c3371b57007b2d2233",
          "message": "Move jaeger propagator out of SDK (#1525)",
          "timestamp": "2021-01-18T14:34:10-08:00",
          "tree_id": "dbd3ed5648bccf69082094bcbff56adefd756ada",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/89fb4e58d0c9d4b3192c91c3371b57007b2d2233"
        },
        "date": 1611009377138,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1094.4276430157333,
            "unit": "iter/sec",
            "range": "stddev: 0.000013006170911292325",
            "extra": "mean: 913.7196107770682 usec\nrounds: 167"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4275.960073379955,
            "unit": "iter/sec",
            "range": "stddev: 0.0013254135092260724",
            "extra": "mean: 233.86560745164877 usec\nrounds: 6845"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb7dba5e5979386165b978b24271a3530e215e4",
          "message": "Move opentracing-shim folder out of instrumentation folder (#1533)",
          "timestamp": "2021-01-18T16:32:54-08:00",
          "tree_id": "0691a7f491b188c71f1339ad04c30690886f86c0",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/2fb7dba5e5979386165b978b24271a3530e215e4"
        },
        "date": 1611016515820,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 833.0267181296649,
            "unit": "iter/sec",
            "range": "stddev: 0.00012753803557148538",
            "extra": "mean: 1.20044168840734 msec\nrounds: 138"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3610.5663611760524,
            "unit": "iter/sec",
            "range": "stddev: 0.0011808915854929743",
            "extra": "mean: 276.96485813219476 usec\nrounds: 5921"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5184c517605c298b333ed2e54d48c2c86439a693",
          "message": "Add rationale document with versioning/releasing details (#1460)",
          "timestamp": "2021-01-18T16:53:54-08:00",
          "tree_id": "99c50a7179516269aa39a371ec1d98baf6ef6fce",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5184c517605c298b333ed2e54d48c2c86439a693"
        },
        "date": 1611017735435,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 881.7349524405427,
            "unit": "iter/sec",
            "range": "stddev: 0.00020373384147483566",
            "extra": "mean: 1.1341276618694918 msec\nrounds: 139"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3747.4014145274327,
            "unit": "iter/sec",
            "range": "stddev: 0.0011900441408321792",
            "extra": "mean: 266.8515831059175 usec\nrounds: 5848"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98f7b606bc59ac4666e522dd7a40d61b631cd352",
          "message": "Update InstrumentationInfo tag keys for Jaeger and Zipkin exporters (#1535)",
          "timestamp": "2021-01-18T20:12:44-08:00",
          "tree_id": "eab5788fca054e52b5fd5e5c6878c423ce2e44a2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/98f7b606bc59ac4666e522dd7a40d61b631cd352"
        },
        "date": 1611029664180,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 984.9166650235635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000433972156444252",
            "extra": "mean: 1.0153143260867412 msec\nrounds: 184"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3893.340450169423,
            "unit": "iter/sec",
            "range": "stddev: 0.001202654265187955",
            "extra": "mean: 256.84884556049644 usec\nrounds: 5834"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a1f594b751289635906a856684b59b3d4a425a5",
          "message": "Add support for OTEL_TRACE_SAMPLER and OTEL_TRACE_SAMPLER_ARG env variables (#1496)",
          "timestamp": "2021-01-18T21:08:45-08:00",
          "tree_id": "0aa9a54738cf435e660cb7d9b8fc9d4a424593c4",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9a1f594b751289635906a856684b59b3d4a425a5"
        },
        "date": 1611033020012,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1083.3793477740428,
            "unit": "iter/sec",
            "range": "stddev: 0.000011749841786582687",
            "extra": "mean: 923.0377171714067 usec\nrounds: 198"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4378.625821490044,
            "unit": "iter/sec",
            "range": "stddev: 0.0012311858912037526",
            "extra": "mean: 228.3821547600751 usec\nrounds: 6481"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d994e757cf4dd5a468fa688617f0de213c9c6139",
          "message": "Adding opentelemetry-distro package and entrypoint (#1482)",
          "timestamp": "2021-01-19T08:35:16-08:00",
          "tree_id": "986c82341c8762c79c7a9188ad96e3f5a5bc7905",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/d994e757cf4dd5a468fa688617f0de213c9c6139"
        },
        "date": 1611074258375,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1008.4191890392016,
            "unit": "iter/sec",
            "range": "stddev: 0.00003662527290450933",
            "extra": "mean: 991.6511019120697 usec\nrounds: 157"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3913.367388470161,
            "unit": "iter/sec",
            "range": "stddev: 0.0011072018871258328",
            "extra": "mean: 255.53440317059687 usec\nrounds: 5866"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c750109dd75b03a9f91dacd1b66b2b8ee140ec0d",
          "message": "Remove rate property setter from TraceIdRatioBasedSampler (#1536)",
          "timestamp": "2021-01-19T15:29:02-08:00",
          "tree_id": "4378974a917e9b5516014e9616da6b7156cd12fa",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c750109dd75b03a9f91dacd1b66b2b8ee140ec0d"
        },
        "date": 1611099049482,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 948.5009061751709,
            "unit": "iter/sec",
            "range": "stddev: 0.000013133717533398196",
            "extra": "mean: 1.0542952499987577 msec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3853.426611274322,
            "unit": "iter/sec",
            "range": "stddev: 0.0012011673537430001",
            "extra": "mean: 259.5092889726273 usec\nrounds: 5831"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d39f7f819d652dd32eb066dd04bac5ae53b855d",
          "message": "Fix TraceState to adhere to specs (#1502)",
          "timestamp": "2021-01-20T09:22:57-08:00",
          "tree_id": "462a0edc209417f4815d1ff1a599b1410ad6b25d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/1d39f7f819d652dd32eb066dd04bac5ae53b855d"
        },
        "date": 1611163483051,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1018.3770367903458,
            "unit": "iter/sec",
            "range": "stddev: 0.0002521809856811706",
            "extra": "mean: 981.9545844746605 usec\nrounds: 219"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4230.612238370413,
            "unit": "iter/sec",
            "range": "stddev: 0.0011089764854039406",
            "extra": "mean: 236.37240750411797 usec\nrounds: 6130"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcecaba8597901c7b9614b06ebc1ac4c22682fc",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#1538)",
          "timestamp": "2021-01-20T15:21:28-08:00",
          "tree_id": "f6db133135e0ad81c726698c79cec95a67898e23",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/bbcecaba8597901c7b9614b06ebc1ac4c22682fc"
        },
        "date": 1611185020438,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1092.386876690815,
            "unit": "iter/sec",
            "range": "stddev: 0.00001103120003290059",
            "extra": "mean: 915.426595959589 usec\nrounds: 198"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4250.190922576855,
            "unit": "iter/sec",
            "range": "stddev: 0.0013513337651051222",
            "extra": "mean: 235.28354801381687 usec\nrounds: 6394"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db9905a164c1f3604eeb8ce5939243948f5be2a8",
          "message": "rename instrumentation to shim (#1539)",
          "timestamp": "2021-01-20T15:51:31-08:00",
          "tree_id": "9bd1e424fd272c88e39f2a9bf78abc22fb9f429d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/db9905a164c1f3604eeb8ce5939243948f5be2a8"
        },
        "date": 1611186783433,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1105.1486687427516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009594025616383001",
            "extra": "mean: 904.8556346157737 usec\nrounds: 208"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4375.882555117852,
            "unit": "iter/sec",
            "range": "stddev: 0.001193010109466553",
            "extra": "mean: 228.52532886890242 usec\nrounds: 6869"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "33c9269b227df473920efc4976b132566d7d1301",
          "message": "[post-release] updating version to 0.18.dev0 (#1541)",
          "timestamp": "2021-01-21T09:10:49-08:00",
          "tree_id": "da745755fc8e6929f953899c2961842a35a2dc1a",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/33c9269b227df473920efc4976b132566d7d1301"
        },
        "date": 1611249145014,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1097.0688011116838,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989862239059335",
            "extra": "mean: 911.5198600002827 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4302.33012213447,
            "unit": "iter/sec",
            "range": "stddev: 0.0012585955195914037",
            "extra": "mean: 232.43218712000657 usec\nrounds: 6584"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251366878,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 939.6602250241393,
            "unit": "iter/sec",
            "range": "stddev: 0.000037566852924782484",
            "extra": "mean: 1.064214461109398 msec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3926.8314007538766,
            "unit": "iter/sec",
            "range": "stddev: 0.0012210759241382974",
            "extra": "mean: 254.6582468012299 usec\nrounds: 5705"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252202216,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1079.0942102756096,
            "unit": "iter/sec",
            "range": "stddev: 0.000012287718703940714",
            "extra": "mean: 926.7031464700304 usec\nrounds: 198"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4292.353443077219,
            "unit": "iter/sec",
            "range": "stddev: 0.0012903214205237535",
            "extra": "mean: 232.97242719208438 usec\nrounds: 6105"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261904483,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 972.6763664798058,
            "unit": "iter/sec",
            "range": "stddev: 0.000037835211331967116",
            "extra": "mean: 1.028091186813843 msec\nrounds: 182"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3867.995571411772,
            "unit": "iter/sec",
            "range": "stddev: 0.0012040109621362816",
            "extra": "mean: 258.53183684877183 usec\nrounds: 5547"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617546287,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1241.5883984614877,
            "unit": "iter/sec",
            "range": "stddev: 0.00009437757358213552",
            "extra": "mean: 805.4198969957744 usec\nrounds: 233"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4757.025396144435,
            "unit": "iter/sec",
            "range": "stddev: 0.0010057260280049308",
            "extra": "mean: 210.21540074402358 usec\nrounds: 8065"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677369139,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1041.985107084185,
            "unit": "iter/sec",
            "range": "stddev: 0.000011804410446231413",
            "extra": "mean: 959.7066149998312 usec\nrounds: 200"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4201.5301878108985,
            "unit": "iter/sec",
            "range": "stddev: 0.0012148243181483403",
            "extra": "mean: 238.00852434694153 usec\nrounds: 6469"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700818287,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 963.0149252203597,
            "unit": "iter/sec",
            "range": "stddev: 0.00003570339316718104",
            "extra": "mean: 1.0384055052637708 msec\nrounds: 190"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4077.079379544561,
            "unit": "iter/sec",
            "range": "stddev: 0.0011567932608792138",
            "extra": "mean: 245.27361547513144 usec\nrounds: 5945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702059455,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 878.357668789948,
            "unit": "iter/sec",
            "range": "stddev: 0.00011653034235632791",
            "extra": "mean: 1.1384883806816763 msec\nrounds: 176"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3638.050912364556,
            "unit": "iter/sec",
            "range": "stddev: 0.0011302910388869987",
            "extra": "mean: 274.872458931601 usec\nrounds: 5637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705474735,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1035.8394084969188,
            "unit": "iter/sec",
            "range": "stddev: 0.000010716116986893346",
            "extra": "mean: 965.4006130651811 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4121.525301917154,
            "unit": "iter/sec",
            "range": "stddev: 0.0013696140684632055",
            "extra": "mean: 242.62862089790966 usec\nrounds: 6460"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765213080,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 884.629713537618,
            "unit": "iter/sec",
            "range": "stddev: 0.00005615741986682482",
            "extra": "mean: 1.1304164722220535 msec\nrounds: 180"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3591.3909993738907,
            "unit": "iter/sec",
            "range": "stddev: 0.0013611442960994643",
            "extra": "mean: 278.4436448647157 usec\nrounds: 5764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854603283,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1050.4499713302228,
            "unit": "iter/sec",
            "range": "stddev: 0.000011809654258794655",
            "extra": "mean: 951.9729899498819 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4053.0389407781804,
            "unit": "iter/sec",
            "range": "stddev: 0.0014753880805886796",
            "extra": "mean: 246.7284461392322 usec\nrounds: 6294"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949784741,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 804.2637011198633,
            "unit": "iter/sec",
            "range": "stddev: 0.00045555315822826836",
            "extra": "mean: 1.24337328491587 msec\nrounds: 179"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3427.5010081631917,
            "unit": "iter/sec",
            "range": "stddev: 0.0014215909040054524",
            "extra": "mean: 291.7577551744917 usec\nrounds: 5653"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962540679,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 903.852649195515,
            "unit": "iter/sec",
            "range": "stddev: 0.0000135142366988154",
            "extra": "mean: 1.1063750279318891 msec\nrounds: 179"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3533.733995320277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014144652839259554",
            "extra": "mean: 282.986778666504 usec\nrounds: 5625"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048932054,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 816.8902283161698,
            "unit": "iter/sec",
            "range": "stddev: 0.00024216817729641617",
            "extra": "mean: 1.224154684848255 msec\nrounds: 165"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3245.9273845335165,
            "unit": "iter/sec",
            "range": "stddev: 0.0013146654830017805",
            "extra": "mean: 308.0783645268495 usec\nrounds: 6636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116150402,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 724.3339845378609,
            "unit": "iter/sec",
            "range": "stddev: 0.0008339358069006191",
            "extra": "mean: 1.380578602339112 msec\nrounds: 171"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3225.58607515518,
            "unit": "iter/sec",
            "range": "stddev: 0.0013806830896620867",
            "extra": "mean: 310.02117962450933 usec\nrounds: 5801"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285701911,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1038.5071314288143,
            "unit": "iter/sec",
            "range": "stddev: 0.000010827282121175537",
            "extra": "mean: 962.9206865668463 usec\nrounds: 201"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4143.0266173232785,
            "unit": "iter/sec",
            "range": "stddev: 0.0012872431738045582",
            "extra": "mean: 241.3694364932849 usec\nrounds: 6456"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251312335,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75897.12115084259,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014266169776381537",
            "extra": "mean: 13.175730315416557 usec\nrounds: 10427"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 156729.0077590576,
            "unit": "iter/sec",
            "range": "stddev: 9.828019110222678e-7",
            "extra": "mean: 6.380439806888324 usec\nrounds: 59874"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252168541,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 73513.00614802848,
            "unit": "iter/sec",
            "range": "stddev: 5.430359305687257e-7",
            "extra": "mean: 13.60303506003228 usec\nrounds: 10753"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 155192.48814972895,
            "unit": "iter/sec",
            "range": "stddev: 3.4707453452628977e-7",
            "extra": "mean: 6.443610846906488 usec\nrounds: 60976"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261861222,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 62863.73192497576,
            "unit": "iter/sec",
            "range": "stddev: 0.000012172544877246371",
            "extra": "mean: 15.907423396266745 usec\nrounds: 10352"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 144853.93021735587,
            "unit": "iter/sec",
            "range": "stddev: 0.000006195242806505203",
            "extra": "mean: 6.9035061630670445 usec\nrounds: 60607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617523103,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 70457.26418834785,
            "unit": "iter/sec",
            "range": "stddev: 6.430975892419829e-7",
            "extra": "mean: 14.193000700776274 usec\nrounds: 11416"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 147626.03316430567,
            "unit": "iter/sec",
            "range": "stddev: 4.018849222110148e-7",
            "extra": "mean: 6.7738729989920845 usec\nrounds: 57472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677334719,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 72567.59748077803,
            "unit": "iter/sec",
            "range": "stddev: 0.000001563285381532075",
            "extra": "mean: 13.780255027250746 usec\nrounds: 11736"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 149060.85050812567,
            "unit": "iter/sec",
            "range": "stddev: 6.877934246784608e-7",
            "extra": "mean: 6.708669624459762 usec\nrounds: 62886"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700770995,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 82610.36588459279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016116994920844545",
            "extra": "mean: 12.105018411333589 usec\nrounds: 10374"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 176317.9248462121,
            "unit": "iter/sec",
            "range": "stddev: 2.738769473981563e-7",
            "extra": "mean: 5.671573102236879 usec\nrounds: 68028"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702006068,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 81204.29152364466,
            "unit": "iter/sec",
            "range": "stddev: 4.6064795302559e-7",
            "extra": "mean: 12.31462009257017 usec\nrounds: 10163"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 176515.64342451873,
            "unit": "iter/sec",
            "range": "stddev: 2.815777460431292e-7",
            "extra": "mean: 5.6652202637644296 usec\nrounds: 67115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705432320,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 69467.358878652,
            "unit": "iter/sec",
            "range": "stddev: 0.000008675521435302359",
            "extra": "mean: 14.395250030260035 usec\nrounds: 8251"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 149048.77509018194,
            "unit": "iter/sec",
            "range": "stddev: 4.334847712970319e-7",
            "extra": "mean: 6.709213137746017 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765169563,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56205.72084733257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001095028212901566",
            "extra": "mean: 17.791783201504092 usec\nrounds: 8727"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 132776.766381731,
            "unit": "iter/sec",
            "range": "stddev: 0.000020544460959655973",
            "extra": "mean: 7.531438121674214 usec\nrounds: 56498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854515346,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94871.65006298528,
            "unit": "iter/sec",
            "range": "stddev: 4.4043455328394697e-7",
            "extra": "mean: 10.540556629257528 usec\nrounds: 12211"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 198734.27512206268,
            "unit": "iter/sec",
            "range": "stddev: 2.997473660253677e-7",
            "extra": "mean: 5.0318446548075295 usec\nrounds: 71943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949689904,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 73100.84511867535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011477939912001388",
            "extra": "mean: 13.679732407697243 usec\nrounds: 10516"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 154673.21599312127,
            "unit": "iter/sec",
            "range": "stddev: 9.98129645045197e-7",
            "extra": "mean: 6.465243472046723 usec\nrounds: 62500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962509831,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 82656.34066137818,
            "unit": "iter/sec",
            "range": "stddev: 4.929180956042858e-7",
            "extra": "mean: 12.098285406763209 usec\nrounds: 11149"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 172375.51972359006,
            "unit": "iter/sec",
            "range": "stddev: 2.9226584347625896e-7",
            "extra": "mean: 5.801287802372017 usec\nrounds: 66226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048841322,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96279.27075419092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019801890903117023",
            "extra": "mean: 10.386451747781557 usec\nrounds: 10041"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 201808.51657816564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011607353308425494",
            "extra": "mean: 4.955192263219844 usec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116119551,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 86059.37365283587,
            "unit": "iter/sec",
            "range": "stddev: 0.000001981934383304494",
            "extra": "mean: 11.619884709293926 usec\nrounds: 12707"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 177641.63707202,
            "unit": "iter/sec",
            "range": "stddev: 0.000001178202205345725",
            "extra": "mean: 5.62931087825191 usec\nrounds: 65360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285679837,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 76336.60558609376,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016497573628718643",
            "extra": "mean: 13.099875116560984 usec\nrounds: 10730"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 153143.65065325235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011984305702042757",
            "extra": "mean: 6.529816911993294 usec\nrounds: 62500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743ab1817a9d2dd10376ec34017ef6f16053ace",
          "message": "Use environment variables for tracer and meter providers (#1571)",
          "timestamp": "2021-02-04T08:36:23-08:00",
          "tree_id": "d2b6cb6fea96bb8927a21ba1ecdf94c3e149ada2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b743ab1817a9d2dd10376ec34017ef6f16053ace"
        },
        "date": 1612456655323,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 67247.1680836448,
            "unit": "iter/sec",
            "range": "stddev: 0.00004497101669699902",
            "extra": "mean: 14.87051467737881 usec\nrounds: 10288"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 144938.03159675698,
            "unit": "iter/sec",
            "range": "stddev: 0.000023597882546352972",
            "extra": "mean: 6.899500351861928 usec\nrounds: 65356"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251312812,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 58104.288669221474,
            "unit": "iter/sec",
            "range": "stddev: 6.29492825647124e-7",
            "extra": "mean: 17.210433565288817 usec\nrounds: 9355"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 136142.3706747088,
            "unit": "iter/sec",
            "range": "stddev: 6.355487192925146e-7",
            "extra": "mean: 7.345251849546133 usec\nrounds: 59877"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252172597,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51184.86378756854,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021799413805758438",
            "extra": "mean: 19.53702571428692 usec\nrounds: 8439"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 117992.81311511486,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011809897902999422",
            "extra": "mean: 8.475092453507239 usec\nrounds: 51280"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261862256,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 50234.28938509098,
            "unit": "iter/sec",
            "range": "stddev: 0.000001738884334586911",
            "extra": "mean: 19.906721330008295 usec\nrounds: 8842"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 117911.32544907455,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011361437115006152",
            "extra": "mean: 8.48094952873629 usec\nrounds: 54645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617526935,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 50323.11393916478,
            "unit": "iter/sec",
            "range": "stddev: 8.22394754848808e-7",
            "extra": "mean: 19.87158428250072 usec\nrounds: 8780"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 118856.87732408331,
            "unit": "iter/sec",
            "range": "stddev: 5.200836707552884e-7",
            "extra": "mean: 8.413480334615652 usec\nrounds: 51283"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677334482,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51150.22135219497,
            "unit": "iter/sec",
            "range": "stddev: 0.000002052530026010744",
            "extra": "mean: 19.550257527029995 usec\nrounds: 8104"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 118933.0767069123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012185236799772457",
            "extra": "mean: 8.408089891294983 usec\nrounds: 55556"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700779218,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 58336.50205401757,
            "unit": "iter/sec",
            "range": "stddev: 5.851897067236779e-7",
            "extra": "mean: 17.141925977564355 usec\nrounds: 10051"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 136448.29525001685,
            "unit": "iter/sec",
            "range": "stddev: 3.254991357229467e-7",
            "extra": "mean: 7.328783391303502 usec\nrounds: 62112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702010075,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56805.454020562094,
            "unit": "iter/sec",
            "range": "stddev: 5.744988107298375e-7",
            "extra": "mean: 17.60394344595901 usec\nrounds: 10627"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 134696.912883609,
            "unit": "iter/sec",
            "range": "stddev: 2.4458161117636624e-7",
            "extra": "mean: 7.424075122375635 usec\nrounds: 58824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705432159,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51251.449310144926,
            "unit": "iter/sec",
            "range": "stddev: 7.617293899948481e-7",
            "extra": "mean: 19.511643347850764 usec\nrounds: 7862"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 116657.05326563744,
            "unit": "iter/sec",
            "range": "stddev: 8.133065768802906e-7",
            "extra": "mean: 8.572134920319991 usec\nrounds: 53476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765166935,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 65475.543937494724,
            "unit": "iter/sec",
            "range": "stddev: 5.429558534312265e-7",
            "extra": "mean: 15.272878083374694 usec\nrounds: 8432"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 156135.05315717173,
            "unit": "iter/sec",
            "range": "stddev: 4.5068335437513676e-7",
            "extra": "mean: 6.404711688882319 usec\nrounds: 67115"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854527481,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 64517.90256606956,
            "unit": "iter/sec",
            "range": "stddev: 0.000002686283625948784",
            "extra": "mean: 15.499573920214624 usec\nrounds: 9747"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 145958.21222399772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015488406189885233",
            "extra": "mean: 6.851276024574279 usec\nrounds: 60241"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949723416,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 49410.106723010314,
            "unit": "iter/sec",
            "range": "stddev: 7.70562513029491e-7",
            "extra": "mean: 20.23877433833389 usec\nrounds: 9337"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 113161.4662970014,
            "unit": "iter/sec",
            "range": "stddev: 3.819303238738813e-7",
            "extra": "mean: 8.836930385608643 usec\nrounds: 51814"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962511404,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 57240.20721863337,
            "unit": "iter/sec",
            "range": "stddev: 5.587949283541118e-7",
            "extra": "mean: 17.470237243908347 usec\nrounds: 7663"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 137900.1135341055,
            "unit": "iter/sec",
            "range": "stddev: 5.276316701130031e-7",
            "extra": "mean: 7.251625646796003 usec\nrounds: 59524"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048857694,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 63815.32478624593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029585768601440526",
            "extra": "mean: 15.67021719860508 usec\nrounds: 8803"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 149633.71325403845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015139163020206186",
            "extra": "mean: 6.682985927791985 usec\nrounds: 62890"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116125469,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 53562.15560919627,
            "unit": "iter/sec",
            "range": "stddev: 0.00001832240243712176",
            "extra": "mean: 18.669898338227195 usec\nrounds: 8184"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 129190.9825872571,
            "unit": "iter/sec",
            "range": "stddev: 0.000001088782011421293",
            "extra": "mean: 7.740478321113383 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285687483,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 42504.225281763676,
            "unit": "iter/sec",
            "range": "stddev: 0.000024105361289065075",
            "extra": "mean: 23.52707274090812 usec\nrounds: 8001"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 105759.30980340179,
            "unit": "iter/sec",
            "range": "stddev: 0.000010663205156943028",
            "extra": "mean: 9.455432357292432 usec\nrounds: 47847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743ab1817a9d2dd10376ec34017ef6f16053ace",
          "message": "Use environment variables for tracer and meter providers (#1571)",
          "timestamp": "2021-02-04T08:36:23-08:00",
          "tree_id": "d2b6cb6fea96bb8927a21ba1ecdf94c3e149ada2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b743ab1817a9d2dd10376ec34017ef6f16053ace"
        },
        "date": 1612456654203,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 51763.714532014135,
            "unit": "iter/sec",
            "range": "stddev: 0.000002073156033988197",
            "extra": "mean: 19.318551789430284 usec\nrounds: 8969"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 119252.47974296115,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011821669907071706",
            "extra": "mean: 8.385569861150202 usec\nrounds: 47394"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251312626,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 115496.41562450837,
            "unit": "iter/sec",
            "range": "stddev: 0.000001983193837734055",
            "extra": "mean: 8.658277355126852 usec\nrounds: 14065"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 214281.60133671446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012076668824141663",
            "extra": "mean: 4.666756239275232 usec\nrounds: 70922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252166611,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 102209.8303929465,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018694058809214005",
            "extra": "mean: 9.783794730462736 usec\nrounds: 13246"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 211165.84721727684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012634851344897122",
            "extra": "mean: 4.735614272752453 usec\nrounds: 68494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261860077,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 105161.40359367394,
            "unit": "iter/sec",
            "range": "stddev: 4.313526645855635e-7",
            "extra": "mean: 9.509192211467932 usec\nrounds: 12788"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 211632.43124191673,
            "unit": "iter/sec",
            "range": "stddev: 3.0214368330046884e-7",
            "extra": "mean: 4.725173708640626 usec\nrounds: 68494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617519840,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 85943.57213477978,
            "unit": "iter/sec",
            "range": "stddev: 0.000038825120298193765",
            "extra": "mean: 11.635541497295042 usec\nrounds: 8362"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 184725.4748314272,
            "unit": "iter/sec",
            "range": "stddev: 0.000009819628159480617",
            "extra": "mean: 5.413438514165729 usec\nrounds: 75188"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677334609,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99535.62278449848,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018745487153664656",
            "extra": "mean: 10.046654373832263 usec\nrounds: 13775"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 204644.5096334511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013474435816811469",
            "extra": "mean: 4.886522495967029 usec\nrounds: 62500"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700779323,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 98322.9068158868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020030339837503224",
            "extra": "mean: 10.17056993516817 usec\nrounds: 13105"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 201234.29737412027,
            "unit": "iter/sec",
            "range": "stddev: 0.000001352545431036056",
            "extra": "mean: 4.969331833831846 usec\nrounds: 76912"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702030079,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 92024.54192339983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016707328459124006",
            "extra": "mean: 10.866666425054182 usec\nrounds: 12423"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 181835.37462404466,
            "unit": "iter/sec",
            "range": "stddev: 8.631415685582061e-7",
            "extra": "mean: 5.499479966797214 usec\nrounds: 31348"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705437113,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 105156.3389364326,
            "unit": "iter/sec",
            "range": "stddev: 4.4699969184954213e-7",
            "extra": "mean: 9.509650203821796 usec\nrounds: 12756"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 209685.97718278941,
            "unit": "iter/sec",
            "range": "stddev: 3.804179297570865e-7",
            "extra": "mean: 4.769036124567695 usec\nrounds: 70423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765156788,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 104545.94467344422,
            "unit": "iter/sec",
            "range": "stddev: 4.6500954646242345e-7",
            "extra": "mean: 9.56517254804634 usec\nrounds: 12837"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 207869.6356291602,
            "unit": "iter/sec",
            "range": "stddev: 9.611001604250167e-7",
            "extra": "mean: 4.810707427149205 usec\nrounds: 72464"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854548463,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 103844.67829108615,
            "unit": "iter/sec",
            "range": "stddev: 4.546887533552399e-7",
            "extra": "mean: 9.629766459451185 usec\nrounds: 13351"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 212095.34034700217,
            "unit": "iter/sec",
            "range": "stddev: 2.969574652603284e-7",
            "extra": "mean: 4.714860771405601 usec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949754799,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 85188.45354455707,
            "unit": "iter/sec",
            "range": "stddev: 0.000006578792375306238",
            "extra": "mean: 11.738680048663623 usec\nrounds: 11508"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 192351.8083952423,
            "unit": "iter/sec",
            "range": "stddev: 0.000004360184924071107",
            "extra": "mean: 5.198807374585278 usec\nrounds: 65360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962517125,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 73147.98065094206,
            "unit": "iter/sec",
            "range": "stddev: 0.000005991080351637378",
            "extra": "mean: 13.670917380097507 usec\nrounds: 8993"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 160098.53229839273,
            "unit": "iter/sec",
            "range": "stddev: 0.000004027940389197923",
            "extra": "mean: 6.246153450902305 usec\nrounds: 59172"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048854810,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 83136.91371593015,
            "unit": "iter/sec",
            "range": "stddev: 0.000013530730030235344",
            "extra": "mean: 12.028351249805736 usec\nrounds: 11442"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 169790.92201587537,
            "unit": "iter/sec",
            "range": "stddev: 0.000017310252400701324",
            "extra": "mean: 5.889596381993264 usec\nrounds: 66667"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116117125,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 103519.11497010369,
            "unit": "iter/sec",
            "range": "stddev: 4.3832654089334863e-7",
            "extra": "mean: 9.660051675372223 usec\nrounds: 11669"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 207263.18189563477,
            "unit": "iter/sec",
            "range": "stddev: 2.923176993101425e-7",
            "extra": "mean: 4.824783595687244 usec\nrounds: 72993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285682227,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96587.1024143803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016288212294521523",
            "extra": "mean: 10.353349205049925 usec\nrounds: 12454"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 192625.6005262714,
            "unit": "iter/sec",
            "range": "stddev: 9.380456375316675e-7",
            "extra": "mean: 5.191417948953334 usec\nrounds: 66221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743ab1817a9d2dd10376ec34017ef6f16053ace",
          "message": "Use environment variables for tracer and meter providers (#1571)",
          "timestamp": "2021-02-04T08:36:23-08:00",
          "tree_id": "d2b6cb6fea96bb8927a21ba1ecdf94c3e149ada2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b743ab1817a9d2dd10376ec34017ef6f16053ace"
        },
        "date": 1612456662082,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 92116.08131647276,
            "unit": "iter/sec",
            "range": "stddev: 0.000004113571954924515",
            "extra": "mean: 10.855867788865373 usec\nrounds: 7783"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 172946.80392659537,
            "unit": "iter/sec",
            "range": "stddev: 0.000019756711592093313",
            "extra": "mean: 5.782124776497372 usec\nrounds: 40817"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251322625,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 439142.1931255094,
            "unit": "iter/sec",
            "range": "stddev: 2.4610333749985007e-7",
            "extra": "mean: 2.2771667483889275 usec\nrounds: 48542"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 874243.3624687179,
            "unit": "iter/sec",
            "range": "stddev: 4.0208626740224063e-7",
            "extra": "mean: 1.1438462594400096 usec\nrounds: 92593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252185838,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 369985.9337810695,
            "unit": "iter/sec",
            "range": "stddev: 2.564458567298958e-7",
            "extra": "mean: 2.702805454738544 usec\nrounds: 47170"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 650592.914323719,
            "unit": "iter/sec",
            "range": "stddev: 3.916375314733888e-7",
            "extra": "mean: 1.5370594698828384 usec\nrounds: 68966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261879437,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 456302.5592048546,
            "unit": "iter/sec",
            "range": "stddev: 3.9438537928605467e-7",
            "extra": "mean: 2.1915283616698304 usec\nrounds: 54348"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 1039538.0302252971,
            "unit": "iter/sec",
            "range": "stddev: 1.977049031210968e-7",
            "extra": "mean: 961.9657683744224 nsec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617527048,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 462130.3495275025,
            "unit": "iter/sec",
            "range": "stddev: 1.6145927089629148e-7",
            "extra": "mean: 2.1638916401453603 usec\nrounds: 48075"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 895011.880101325,
            "unit": "iter/sec",
            "range": "stddev: 3.362838918805969e-7",
            "extra": "mean: 1.1173036048268778 usec\nrounds: 93458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677351372,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 418792.910195039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013420417379639622",
            "extra": "mean: 2.3878150170551042 usec\nrounds: 45455"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 847038.8946230154,
            "unit": "iter/sec",
            "range": "stddev: 0.000001997122851285661",
            "extra": "mean: 1.1805833313538479 usec\nrounds: 92593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700789871,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 469699.26889350126,
            "unit": "iter/sec",
            "range": "stddev: 1.6527281424113248e-7",
            "extra": "mean: 2.1290218363672793 usec\nrounds: 48781"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 808155.6444017292,
            "unit": "iter/sec",
            "range": "stddev: 2.5017127782819276e-7",
            "extra": "mean: 1.2373854058028289 usec\nrounds: 84746"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702045748,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 458001.6067729065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010261345293879735",
            "extra": "mean: 2.1833984536561566 usec\nrounds: 54645"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 957677.9033959439,
            "unit": "iter/sec",
            "range": "stddev: 3.955645284509992e-7",
            "extra": "mean: 1.0441924121398303 usec\nrounds: 107527"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705483307,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 399800.34117401525,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014284867149917242",
            "extra": "mean: 2.5012484908429564 usec\nrounds: 59172"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 760857.2551510851,
            "unit": "iter/sec",
            "range": "stddev: 9.626180906061976e-7",
            "extra": "mean: 1.314306978384814 usec\nrounds: 96154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765167255,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 386350.7394056706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027398750356176124",
            "extra": "mean: 2.5883216932322846 usec\nrounds: 43479"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 661760.4425045934,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011290812872818279",
            "extra": "mean: 1.5111208464125725 usec\nrounds: 75188"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854565380,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 431404.30828419165,
            "unit": "iter/sec",
            "range": "stddev: 3.588779221765239e-7",
            "extra": "mean: 2.3180111575085562 usec\nrounds: 57468"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 918573.9001119158,
            "unit": "iter/sec",
            "range": "stddev: 2.545461235751976e-7",
            "extra": "mean: 1.0886440381967732 usec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949758631,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 403103.01152811985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035901587560050448",
            "extra": "mean: 2.480755467961204 usec\nrounds: 53476"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 714876.3122373279,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026334689013219725",
            "extra": "mean: 1.3988433843476644 usec\nrounds: 97088"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962544850,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 377786.0335557363,
            "unit": "iter/sec",
            "range": "stddev: 0.00000412633214729888",
            "extra": "mean: 2.6470009772142866 usec\nrounds: 56180"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 685456.5664143628,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018892949225548454",
            "extra": "mean: 1.4588816403513334 usec\nrounds: 86957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048875361,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 438316.38471425837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026158420605602633",
            "extra": "mean: 2.281457036227249 usec\nrounds: 53189"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 919685.0081709692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015098186584195198",
            "extra": "mean: 1.0873288040095734 usec\nrounds: 109891"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116165197,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 359179.0934047536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015762198748491735",
            "extra": "mean: 2.784126410367505 usec\nrounds: 46512"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 707477.4559540683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016141749399067183",
            "extra": "mean: 1.4134726012597394 usec\nrounds: 96154"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285721909,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 437545.3124966538,
            "unit": "iter/sec",
            "range": "stddev: 2.110250902558033e-7",
            "extra": "mean: 2.2854775755542702 usec\nrounds: 48077"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 973010.6645237036,
            "unit": "iter/sec",
            "range": "stddev: 2.3031472067471884e-7",
            "extra": "mean: 1.0277379647113616 usec\nrounds: 106383"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251321517,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 91600.55527390316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017556429013265361",
            "extra": "mean: 10.916964389678743 usec\nrounds: 12019"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 205789.61645031796,
            "unit": "iter/sec",
            "range": "stddev: 0.000001232574906673901",
            "extra": "mean: 4.8593316672098545 usec\nrounds: 71424"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252177692,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 87608.49877593447,
            "unit": "iter/sec",
            "range": "stddev: 5.841557283555851e-7",
            "extra": "mean: 11.414417710290614 usec\nrounds: 12377"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 189373.98960388533,
            "unit": "iter/sec",
            "range": "stddev: 3.994069849032644e-7",
            "extra": "mean: 5.280556226817135 usec\nrounds: 68028"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261862311,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94906.23231464335,
            "unit": "iter/sec",
            "range": "stddev: 0.000014590833988205882",
            "extra": "mean: 10.536715825834202 usec\nrounds: 12151"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 219477.74066895826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020207579507542082",
            "extra": "mean: 4.556270704045181 usec\nrounds: 75758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617521089,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99667.4845983327,
            "unit": "iter/sec",
            "range": "stddev: 0.000001949589683977385",
            "extra": "mean: 10.033362475536265 usec\nrounds: 13314"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 217616.28369762885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011310022767862588",
            "extra": "mean: 4.595244358595284 usec\nrounds: 73519"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677345910,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 70031.08295217741,
            "unit": "iter/sec",
            "range": "stddev: 0.000015343877985008923",
            "extra": "mean: 14.279373641599637 usec\nrounds: 10122"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 171988.02722278493,
            "unit": "iter/sec",
            "range": "stddev: 0.000026016918845700464",
            "extra": "mean: 5.814358221021098 usec\nrounds: 70423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700790611,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 79925.17870149124,
            "unit": "iter/sec",
            "range": "stddev: 0.000016715585927571796",
            "extra": "mean: 12.511701772164347 usec\nrounds: 7900"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 190537.21790734577,
            "unit": "iter/sec",
            "range": "stddev: 0.000016342078182568797",
            "extra": "mean: 5.24831847018087 usec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702027697,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 89248.42109701225,
            "unit": "iter/sec",
            "range": "stddev: 0.000001276829080703319",
            "extra": "mean: 11.204680012355722 usec\nrounds: 12988"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 188908.38220888085,
            "unit": "iter/sec",
            "range": "stddev: 9.083008082834922e-7",
            "extra": "mean: 5.2935713508693025 usec\nrounds: 62501"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705440783,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 98323.34262826061,
            "unit": "iter/sec",
            "range": "stddev: 0.000001559778169752309",
            "extra": "mean: 10.170524854721272 usec\nrounds: 12392"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 212096.54204811828,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011080148821463641",
            "extra": "mean: 4.7148340578467804 usec\nrounds: 72459"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765173933,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 88007.86932142702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016945126579093478",
            "extra": "mean: 11.362620271463985 usec\nrounds: 11050"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 189974.63039865103,
            "unit": "iter/sec",
            "range": "stddev: 8.283420555838679e-7",
            "extra": "mean: 5.263860747624862 usec\nrounds: 67568"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854536455,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 111131.5808973314,
            "unit": "iter/sec",
            "range": "stddev: 5.757015476500179e-7",
            "extra": "mean: 8.998342252719748 usec\nrounds: 11062"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 244165.36776173513,
            "unit": "iter/sec",
            "range": "stddev: 3.3510198747348357e-7",
            "extra": "mean: 4.0955849274080265 usec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949719118,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 68672.18800502455,
            "unit": "iter/sec",
            "range": "stddev: 0.000011646007116441539",
            "extra": "mean: 14.561935902302002 usec\nrounds: 10406"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 171238.5458811207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004908582946706619",
            "extra": "mean: 5.839806655998073 usec\nrounds: 60607"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962518283,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 81602.48709440893,
            "unit": "iter/sec",
            "range": "stddev: 0.000001120238081936213",
            "extra": "mean: 12.254528453808804 usec\nrounds: 10684"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 179604.68877262794,
            "unit": "iter/sec",
            "range": "stddev: 2.9182179033086495e-7",
            "extra": "mean: 5.567783373773489 usec\nrounds: 60976"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048847512,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 94311.05809933461,
            "unit": "iter/sec",
            "range": "stddev: 5.618896181734082e-7",
            "extra": "mean: 10.603210484042435 usec\nrounds: 12438"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 218945.56507058107,
            "unit": "iter/sec",
            "range": "stddev: 4.2419299403096524e-7",
            "extra": "mean: 4.567345311048579 usec\nrounds: 75752"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116118469,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 99446.88656764773,
            "unit": "iter/sec",
            "range": "stddev: 4.933413518083906e-7",
            "extra": "mean: 10.055618979280565 usec\nrounds: 13246"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 215799.27622606698,
            "unit": "iter/sec",
            "range": "stddev: 3.1810742724256664e-7",
            "extra": "mean: 4.633935838377975 usec\nrounds: 71429"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285678901,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 96999.86805777949,
            "unit": "iter/sec",
            "range": "stddev: 4.605394071363414e-7",
            "extra": "mean: 10.309292373514719 usec\nrounds: 14266"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 210707.99750842608,
            "unit": "iter/sec",
            "range": "stddev: 2.388512362035643e-7",
            "extra": "mean: 4.745904340721622 usec\nrounds: 81968"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743ab1817a9d2dd10376ec34017ef6f16053ace",
          "message": "Use environment variables for tracer and meter providers (#1571)",
          "timestamp": "2021-02-04T08:36:23-08:00",
          "tree_id": "d2b6cb6fea96bb8927a21ba1ecdf94c3e149ada2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b743ab1817a9d2dd10376ec34017ef6f16053ace"
        },
        "date": 1612456652783,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 71880.07534815291,
            "unit": "iter/sec",
            "range": "stddev: 0.000015868312376311996",
            "extra": "mean: 13.91206109838471 usec\nrounds: 9542"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 175693.8601839269,
            "unit": "iter/sec",
            "range": "stddev: 0.000038678053561216075",
            "extra": "mean: 5.69171853218513 usec\nrounds: 75188"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4083cac3c0ec107df68cdecb8fc52c00e2684b08",
          "message": "Add b3 format benchmark tests (#1489)\n\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-21T09:47:30-08:00",
          "tree_id": "0a1b108a48a5ec3b413983d9fb07ecc45f9dc199",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/4083cac3c0ec107df68cdecb8fc52c00e2684b08"
        },
        "date": 1611251320624,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 53173.540002504094,
            "unit": "iter/sec",
            "range": "stddev: 7.107582639094285e-7",
            "extra": "mean: 18.80634616301467 usec\nrounds: 8418"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 116172.66890511767,
            "unit": "iter/sec",
            "range": "stddev: 3.9641278796382485e-7",
            "extra": "mean: 8.607876615253932 usec\nrounds: 52081"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b32365bf71a8a258e668bd81e90f158f2a88a4d7",
          "message": "Allow to `start_as_current_span` with `end_on_exit=False` (#1519)",
          "timestamp": "2021-01-21T10:01:46-08:00",
          "tree_id": "8bdccaf49d5c64062a1ba7a787e890da2a104842",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b32365bf71a8a258e668bd81e90f158f2a88a4d7"
        },
        "date": 1611252168710,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 58478.969618903706,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015484527654867982",
            "extra": "mean: 17.100164495318733 usec\nrounds: 9058"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 127726.88607741844,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011697983777517582",
            "extra": "mean: 7.829205194855177 usec\nrounds: 53476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anton.ryzhov@zalando.de",
            "name": "Anton Ryzhov",
            "username": "anton-ryzhov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6489bf50a576c9c772d2f7b78d677cf16b4526ac",
          "message": "Add `Span.set_attributes` method (#1520)",
          "timestamp": "2021-01-21T12:42:01-08:00",
          "tree_id": "b1637c968e9624dee4e4588021e48d8372f25eba",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/6489bf50a576c9c772d2f7b78d677cf16b4526ac"
        },
        "date": 1611261854623,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 54907.64305855489,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014134312934594247",
            "extra": "mean: 18.212400756914207 usec\nrounds: 7663"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 116198.56419030557,
            "unit": "iter/sec",
            "range": "stddev: 6.94465621336113e-7",
            "extra": "mean: 8.605958317714133 usec\nrounds: 53476"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39923391+hectorhdzg@users.noreply.github.com",
            "name": "Hector Hernandez",
            "username": "hectorhdzg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e0465824bf8804f29b3c57caec48791cf571007",
          "message": "Make sure Resources follow semantic conventions (#1480)",
          "timestamp": "2021-01-25T15:30:54-08:00",
          "tree_id": "bb210ee6cefcd6d0d76eab3355b6f6e7984aa6c5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/0e0465824bf8804f29b3c57caec48791cf571007"
        },
        "date": 1611617518784,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 62383.44735705255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028546366777948973",
            "extra": "mean: 16.029893222740412 usec\nrounds: 7717"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 138841.36258988662,
            "unit": "iter/sec",
            "range": "stddev: 0.000001709648541086828",
            "extra": "mean: 7.202464606702449 usec\nrounds: 70423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9077ce3c2f3682b7858f701c60a31f31ab692f27",
          "message": "Add Zoom passcode (#1550)",
          "timestamp": "2021-01-26T08:07:44-08:00",
          "tree_id": "4dda91f98f42dc9d7056d847dbe80d254706ce04",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/9077ce3c2f3682b7858f701c60a31f31ab692f27"
        },
        "date": 1611677341401,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 42439.985138024545,
            "unit": "iter/sec",
            "range": "stddev: 0.000021373633289800575",
            "extra": "mean: 23.562684971443115 usec\nrounds: 8577"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 106946.1189496086,
            "unit": "iter/sec",
            "range": "stddev: 0.000011471314738912002",
            "extra": "mean: 9.35050294318006 usec\nrounds: 48077"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a600657afd2f3a1c66e016a3ae2691edce6fb260",
          "message": "Update docs (#1548)",
          "timestamp": "2021-01-26T14:38:29-08:00",
          "tree_id": "e3fe1b16beb7da267ad691f2b119951ee396fec5",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/a600657afd2f3a1c66e016a3ae2691edce6fb260"
        },
        "date": 1611700774082,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 60255.01446773232,
            "unit": "iter/sec",
            "range": "stddev: 5.29001349915617e-7",
            "extra": "mean: 16.596129116117275 usec\nrounds: 8078"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 132532.98813300816,
            "unit": "iter/sec",
            "range": "stddev: 3.3523453861432607e-7",
            "extra": "mean: 7.545291282472365 usec\nrounds: 30582"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6",
          "message": "adding note to check on the stable docs build (#1552)",
          "timestamp": "2021-01-26T14:59:03-08:00",
          "tree_id": "b89511c79f824536a2fd23703bbb046fcea7cdc3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/f433bc7bbd7e7484b7a84f1876e320c4c90ed0d6"
        },
        "date": 1611702014388,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 53118.08117298195,
            "unit": "iter/sec",
            "range": "stddev: 0.00006503610944065449",
            "extra": "mean: 18.825981246262362 usec\nrounds: 8265"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 130314.10304702041,
            "unit": "iter/sec",
            "range": "stddev: 0.00001091966403704464",
            "extra": "mean: 7.673766511972817 usec\nrounds: 58821"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611705429714,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 54196.30271666826,
            "unit": "iter/sec",
            "range": "stddev: 7.508810394992007e-7",
            "extra": "mean: 18.451443177367274 usec\nrounds: 7717"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 118093.00449183748,
            "unit": "iter/sec",
            "range": "stddev: 4.844548505885872e-7",
            "extra": "mean: 8.467902093803698 usec\nrounds: 52632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ewan.higgs@gmail.com",
            "name": "Ewan Higgs",
            "username": "ehiggs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9",
          "message": "1542. Allow missing carrier headers to continue without raising AttributeError (#1545)",
          "timestamp": "2021-01-27T08:31:32-08:00",
          "tree_id": "cd2a50fa811d6310e1d6bf9b75512412d2a30766",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/c026c0f6a53adae1af6cf36fb4bb830a31c6ffc9"
        },
        "date": 1611765157829,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 61170.34587481353,
            "unit": "iter/sec",
            "range": "stddev: 6.663670561197152e-7",
            "extra": "mean: 16.347790513503423 usec\nrounds: 9719"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 134410.80299515874,
            "unit": "iter/sec",
            "range": "stddev: 3.333032775303511e-7",
            "extra": "mean: 7.43987817732194 usec\nrounds: 54645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18761d78e30a4293abd65a897129b57fbf0c0a15",
          "message": "Update Resource merge key conflict precedence (#1544)",
          "timestamp": "2021-01-28T09:20:50-08:00",
          "tree_id": "aa5e34bdc6bcc45b3961ba96d824d9cefdeb6a26",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/18761d78e30a4293abd65a897129b57fbf0c0a15"
        },
        "date": 1611854521328,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 60999.9918676193,
            "unit": "iter/sec",
            "range": "stddev: 6.31705002461138e-7",
            "extra": "mean: 16.39344480848745 usec\nrounds: 9766"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 133294.47866001466,
            "unit": "iter/sec",
            "range": "stddev: 3.4036512796653445e-7",
            "extra": "mean: 7.502186212458458 usec\nrounds: 57472"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf8b70e77b65686d6bc40db227e4af63ee336cf5",
          "message": "updating references to main (#1558)",
          "timestamp": "2021-01-29T11:47:19-08:00",
          "tree_id": "ae6f321d40c8c8a8d828fd144a748b33fd2b52db",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/cf8b70e77b65686d6bc40db227e4af63ee336cf5"
        },
        "date": 1611949711469,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 45732.60753000961,
            "unit": "iter/sec",
            "range": "stddev: 0.000021433685770680445",
            "extra": "mean: 21.866236237323722 usec\nrounds: 7048"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 120917.10132103303,
            "unit": "iter/sec",
            "range": "stddev: 0.00000973137965322546",
            "extra": "mean: 8.27012878306614 usec\nrounds: 56498"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05ab4a70e17958d3d75c6c35253216d5afb42085",
          "message": "Cleanup references to semantic convetion 'component' attribute (#1555)",
          "timestamp": "2021-01-29T15:21:08-08:00",
          "tree_id": "58e5b54994bd19d5541e1430b0b51e7eb25ce2f3",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/05ab4a70e17958d3d75c6c35253216d5afb42085"
        },
        "date": 1611962511342,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 67853.87272874189,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011569773639804578",
            "extra": "mean: 14.737552328040001 usec\nrounds: 9364"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 150237.92613676138,
            "unit": "iter/sec",
            "range": "stddev: 6.243725838077251e-7",
            "extra": "mean: 6.656108918128312 usec\nrounds: 58824"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "731f32c4ace615d743b424860741334d76369780",
          "message": "Remove `Configuration` (#1523)",
          "timestamp": "2021-01-30T15:19:38-08:00",
          "tree_id": "8eeb186a66960cbc538b5a8a09a8dd6afc17ca96",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/731f32c4ace615d743b424860741334d76369780"
        },
        "date": 1612048846666,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 60928.6259518307,
            "unit": "iter/sec",
            "range": "stddev: 5.274727704782552e-7",
            "extra": "mean: 16.41264650856538 usec\nrounds: 10583"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 134322.26600057606,
            "unit": "iter/sec",
            "range": "stddev: 3.1836531899390054e-7",
            "extra": "mean: 7.444782088441773 usec\nrounds: 64517"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc23b0b027208e45c80f04ab6d983a9803607b5",
          "message": "Add resource usage performance tests for creating a span (#1499)",
          "timestamp": "2021-01-31T10:01:13-08:00",
          "tree_id": "c5f78b0abff1aeb01ed325b19c1c8d54e441b18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/5bc23b0b027208e45c80f04ab6d983a9803607b5"
        },
        "date": 1612116127434,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 56792.546927034564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022393083503433333",
            "extra": "mean: 17.607944248120646 usec\nrounds: 9058"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 120058.01034148605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014694949226615008",
            "extra": "mean: 8.329306783909361 usec\nrounds: 53761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30bb6a7b3e87e25c428f5582db96c4509d293523",
          "message": "Set actions cache back to V2 (#1565)\n\nFixes #1564",
          "timestamp": "2021-02-02T09:07:09-08:00",
          "tree_id": "962a18a8accab09af0c982e3335b15a0e9eddc43",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/30bb6a7b3e87e25c428f5582db96c4509d293523"
        },
        "date": 1612285690241,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 38557.71732081726,
            "unit": "iter/sec",
            "range": "stddev: 0.000050031935526866725",
            "extra": "mean: 25.93514527012991 usec\nrounds: 1480"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 101954.0554713882,
            "unit": "iter/sec",
            "range": "stddev: 0.00003052611585028207",
            "extra": "mean: 9.808339603328818 usec\nrounds: 47847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743ab1817a9d2dd10376ec34017ef6f16053ace",
          "message": "Use environment variables for tracer and meter providers (#1571)",
          "timestamp": "2021-02-04T08:36:23-08:00",
          "tree_id": "d2b6cb6fea96bb8927a21ba1ecdf94c3e149ada2",
          "url": "https://github.com/open-telemetry/opentelemetry-python/commit/b743ab1817a9d2dd10376ec34017ef6f16053ace"
        },
        "date": 1612456646900,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 75604.91696942183,
            "unit": "iter/sec",
            "range": "stddev: 0.000002063775914753372",
            "extra": "mean: 13.22665297555246 usec\nrounds: 9276"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 153858.96396015576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013157487056056543",
            "extra": "mean: 6.49945881774536 usec\nrounds: 66667"
          }
        ]
      }
    ]
  }
}